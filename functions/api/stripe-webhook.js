// POST /api/stripe-webhook — Stripe Webhook Endpoint
// Handles subscription activation and cancellation securely using Web Crypto API.

export async function onRequestPost(context) {
  const headers = {
    "Content-Type": "application/json"
  };

  try {
    const db = context.env.DB;
    const webhookSecret = context.env.STRIPE_WEBHOOK_SECRET;

    if (!db) {
      return new Response(JSON.stringify({ error: "Database binding 'DB' not configured" }), {
        status: 500,
        headers
      });
    }

    if (!webhookSecret) {
      return new Response(JSON.stringify({ error: "Stripe Webhook Secret not configured in environment variables" }), {
        status: 500,
        headers
      });
    }

    // 1. Get raw request body and signature header
    const rawBody = await context.request.text();
    const signatureHeader = context.request.headers.get("Stripe-Signature");

    // 2. Validate Stripe Signature (No external dependencies)
    const isSignatureValid = await verifyStripeSignature(rawBody, signatureHeader, webhookSecret);
    if (!isSignatureValid) {
      return new Response(JSON.stringify({ error: "Invalid Stripe signature" }), {
        status: 400,
        headers
      });
    }

    // 3. Parse JSON event
    const event = JSON.parse(rawBody);

    // 4. Idempotency Check
    const { results: eventCheck } = await db
      .prepare("SELECT id FROM events_processed WHERE id = ?")
      .bind(event.id)
      .all();

    if (eventCheck.length > 0) {
      // Event already processed
      return new Response(JSON.stringify({ received: true, info: "Duplicate event skipped" }), {
        status: 200,
        headers
      });
    }

    // Record the event as processed to prevent duplicate runs
    await db.prepare("INSERT INTO events_processed (id) VALUES (?)").bind(event.id).run();

    // 5. Route event type
    const eventType = event.type;

    if (eventType === "checkout.session.completed") {
      const session = event.data.object;

      // Extract custom fields: website_url, tagline
      let websiteUrl = "";
      let tagline = "";

      if (session.custom_fields) {
        for (const field of session.custom_fields) {
          const key = field.key?.toLowerCase();
          const name = field.label?.name?.toLowerCase() || "";

          if (key === "website_url" || name.includes("website")) {
            websiteUrl = field.text?.value || "";
          } else if (key === "tagline" || name.includes("tagline")) {
            // Enforce max 40 chars
            tagline = (field.text?.value || "").substring(0, 40);
          }
        }
      }

      const email = session.customer_details?.email || "";
      const name = session.customer_details?.name || "Anonymous Sponsor";
      const subscriptionId = session.subscription;
      const customerId = session.customer;

      // Find the next available slot (active = 0, lowest slot_number)
      const { results: availableSlots } = await db
        .prepare("SELECT id, slot_number FROM sponsors WHERE active = 0 ORDER BY slot_number ASC LIMIT 1")
        .all();

      if (availableSlots.length === 0) {
        // All 20 slots occupied, return 200 but log warnings/alerts
        console.warn("TestSprite Warning: No available sponsor slots remaining for subscription activation.");
        return new Response(
          JSON.stringify({ received: true, status: "No available slot. Action required." }),
          { status: 200, headers }
        );
      }

      const targetSlot = availableSlots[0];

      // Update the slot D1 row to activate the sponsorship
      await db
        .prepare(`
          UPDATE sponsors 
          SET active = 1,
              name = ?,
              email = ?,
              website_url = ?,
              tagline = ?,
              stripe_subscription_id = ?,
              stripe_customer_id = ?,
              paid_until = date('now', '+1 month'),
              updated_at = datetime('now')
          WHERE id = ?
        `)
        .bind(name, email, websiteUrl, tagline, subscriptionId, customerId, targetSlot.id)
        .run();

    } else if (eventType === "customer.subscription.deleted") {
      const subscription = event.data.object;
      const subscriptionId = subscription.id;

      // De-provision the sponsor slot matching the subscription ID
      await db
        .prepare(`
          UPDATE sponsors
          SET active = 0,
              name = 'Available',
              logo_url = '',
              website_url = '',
              tagline = 'Your ad here',
              email = 'sponsors@illustratewords.com',
              stripe_subscription_id = NULL,
              stripe_customer_id = NULL,
              paid_until = NULL,
              updated_at = datetime('now')
          WHERE stripe_subscription_id = ?
        `)
        .bind(subscriptionId)
        .run();
    }

    return new Response(JSON.stringify({ received: true }), {
      status: 200,
      headers
    });

  } catch (err) {
    return new Response(
      JSON.stringify({ error: "Internal Webhook Handler Error", details: err.message }),
      { status: 500, headers }
    );
  }
}

// Helper: HMAC-SHA256 signature verification for Stripe Webhooks (Web Crypto API)
async function verifyStripeSignature(rawBody, signatureHeader, secret) {
  if (!signatureHeader || !secret) return false;

  // Header format: t=12345678,v1=abcde...,v0=...
  const parts = signatureHeader.split(",");
  let timestamp = "";
  let signature = "";

  for (const part of parts) {
    const [key, val] = part.split("=");
    if (key === "t") timestamp = val;
    if (key === "v1") signature = val;
  }

  if (!timestamp || !signature) return false;

  // Signed payload format: timestamp.body
  const signedPayload = `${timestamp}.${rawBody}`;

  const encoder = new TextEncoder();
  const keyData = encoder.encode(secret);
  const messageData = encoder.encode(signedPayload);

  // Import signature key
  const cryptoKey = await crypto.subtle.importKey(
    "raw",
    keyData,
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );

  // Generate signature
  const computedSignatureBuffer = await crypto.subtle.sign(
    "HMAC",
    cryptoKey,
    messageData
  );

  // Convert computed signature to Hex string
  const computedSignatureArray = Array.from(new Uint8Array(computedSignatureBuffer));
  const computedSignatureHex = computedSignatureArray
    .map(b => b.toString(16).padStart(2, "0"))
    .join("");

  // Constant-time string comparison to prevent timing attacks
  if (computedSignatureHex.length !== signature.length) return false;
  let result = 0;
  for (let i = 0; i < computedSignatureHex.length; i++) {
    result |= computedSignatureHex.charCodeAt(i) ^ signature.charCodeAt(i);
  }
  return result === 0;
}
