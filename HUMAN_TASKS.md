# Human Tasks Checklist — Sponsor Ad System Launch

This document lists every manual action the site owner must take to configure, test, and launch the Stripe/Cloudflare D1-backed sponsor ad system for `illustratewords.com`.

---

## Section 1: Stripe Setup

1. **Create Stripe Account**:
   - Go to [stripe.com](https://stripe.com) and register an account.
   - Complete your business profile verification (bank account, legal entity details, tax identification).
2. **Configure Product (Stripe Test Mode)**:
   - Toggle **Test Mode** on in the Stripe Dashboard sidebar.
   - Navigate to **Product catalog** → click **Add product**.
   - **Name**: `illustratewords.com Sponsor Slot`
   - **Pricing**: `$50.00 USD` recurring monthly.
3. **Configure Stripe Payment Link**:
   - Navigate to **Payment Links** → **Create payment link**.
   - Select the `illustratewords.com Sponsor Slot` product.
   - Under **Custom fields**, add two required fields:
     - **Field 1 (Website URL)**:
       - Label: `Website URL` (Type: Text)
       - Key (metadata binding): `website_url`
       - Required: **Yes**
     - **Field 2 (Tagline)**:
       - Label: `Tagline (max 40 characters)` (Type: Text)
       - Key (metadata binding): `tagline`
       - Required: **Yes**
   - Under **Customer details**, check **Collect customer's name and email**.
   - Create the link, copy the URL (looks like `https://buy.stripe.com/test_xxx`), and replace the placeholder `STRIPE_PAYMENT_LINK_PLACEHOLDER` in [sponsor.astro](file:///Users/user/Prompt-Visualizer-Claude/src/pages/sponsor.astro).
4. **Repeat in Live Mode**:
   - Toggle **Live Mode** on in the Stripe Dashboard.
   - Repeat the Product and Payment Link setup steps (Stripe keeps test and live configurations completely isolated).
   - Update `sponsor.astro` with the live Payment Link URL before deploying to production.
5. **Get Secret Key**:
   - Go to **Developers** → **API keys**. Copy the **Secret key** (starts with `sk_live_...` or `sk_test_...`) for webhook local signature simulation if desired.
6. **Set Up Stripe Webhook**:
   - Go to **Developers** → **Webhooks** → **Add endpoint**.
   - **Endpoint URL**: `https://illustratewords.com/api/stripe-webhook`
   - **Select events to listen to**:
     - `checkout.session.completed`
     - `customer.subscription.deleted`
   - Add endpoint and copy the **Signing secret** (starts with `whsec_...`).

---

## Section 2: Cloudflare Setup

1. **Prerequisites & CLI login**:
   - Ensure you have wrangler installed globally:
     ```bash
     npm install -g wrangler
     ```
   - Login to wrangler:
     ```bash
     wrangler login
     ```
2. **Create D1 Database**:
   - Run the wrangler database creation command:
     ```bash
     wrangler d1 create illustratewords-sponsors
     ```
   - Copy the returned `database_id` UUID and replace the `REPLACE_WITH_DATABASE_ID` placeholder inside [wrangler.toml](file:///Users/user/Prompt-Visualizer-Claude/wrangler.toml).
3. **Run Migrations & Seed D1**:
   - Apply the [schema.sql](file:///Users/user/Prompt-Visualizer-Claude/schema.sql) migrations to your **local preview environment**:
     ```bash
     wrangler d1 execute illustratewords-sponsors --local --file=./schema.sql
     ```
   - Apply the migrations to your **production D1 database**:
     ```bash
     wrangler d1 execute illustratewords-sponsors --remote --file=./schema.sql
     ```
4. **Cloudflare Pages Environment Variables**:
   - Navigate to the **Cloudflare Dashboard** → **Workers & Pages** → click your `illustratewords` project.
   - Go to **Settings** → **Environment variables**.
   - Under **Production / Preview**, add the following variable:
     - **Variable Name**: `STRIPE_WEBHOOK_SECRET`
     - **Value**: *Your Stripe Webhook Signing Secret* (the `whsec_...` value obtained in Section 1, Step 6).
5. **Cloudflare D1 Bindings**:
   - In the same Pages project settings, go to **Settings** → **Functions** → **D1 database bindings**.
   - Click **Add binding**.
   - **Variable name**: `DB`
   - **Database namespace**: Select `illustratewords-sponsors` from the dropdown list.
   - Save the configuration and trigger a deployment.

---

## Section 3: Content Prep

1. **Traffic Stats**:
   - Replace the `{{TRAFFIC_STATS_PLACEHOLDER}}` in `src/pages/sponsor.astro` with your actual monthly visitor count (e.g., `10,000+`).
   - Replace `{{TRAFFIC_DURATION_PLACEHOLDER}}` with your average user session duration (e.g., `2 minutes`).
2. **Logo Asset Pipeline**:
   - Set up a folder or service to store sponsor logos. You can upload them to your repository's public directory (`public/images/sponsors/`), or host them on a CDN/R2 bucket.
3. **Seed Starter Sponsors**:
   - To avoid displaying an empty sponsor bar at launch, identify 3–4 friendly projects (or your own portfolio sites) and activate them directly in D1:
     ```bash
     # Example SQL to manually activate a starter sponsor in slot 1
     wrangler d1 execute illustratewords-sponsors --remote --command="UPDATE sponsors SET active=1, name='VisualCraft', website_url='https://illustratewords.com', tagline='Free AI prompt builder for diagrams.', logo_url='https://illustratewords.com/favicon.png' WHERE slot_number=1;"
     ```

---

## Section 4: Testing (in Stripe Test Mode)

1. **Simulate Webhook**:
   - Use the Stripe CLI to forward events locally:
     ```bash
     stripe listen --forward-to localhost:8788/api/stripe-webhook
     ```
2. **Complete Test Purchase**:
   - Navigate to your test Payment Link and fill out the payment form using the Stripe test credit card `4242 4242 4242 4242`.
   - Enter mock details for **Website URL** and **Tagline**.
3. **Verify D1 Insertion**:
   - Confirm the webhook successfully activated the slot and saved customer values in production:
     ```bash
     wrangler d1 execute illustratewords-sponsors --remote --command="SELECT slot_number, name, active, tagline FROM sponsors WHERE active=1;"
     ```
4. **Apply Logo**:
   - Upload the sponsor's logo and update the slot's `logo_url` in D1:
     ```bash
     wrangler d1 execute illustratewords-sponsors --remote --command="UPDATE sponsors SET logo_url='https://illustratewords.com/images/sponsors/test_logo.png' WHERE slot_number=X"
     ```
5. **Verify Front-End Display**:
   - Navigate to `https://illustratewords.com` (or preview locally) and confirm the sponsor card loads and rotates correctly.
6. **Test De-provisioning**:
   - Go to Stripe Dashboard → **Customers** → find the test customer → cancel the subscription.
   - Run D1 query to confirm slot reset:
     ```bash
     wrangler d1 execute illustratewords-sponsors --remote --command="SELECT slot_number, name, active FROM sponsors WHERE slot_number=X"
     ```

---

## Section 5: Launch Checklist

1. [ ] Recreate the product and Payment Link in **Stripe Live Mode**.
2. [ ] Update [sponsor.astro](file:///Users/user/Prompt-Visualizer-Claude/src/pages/sponsor.astro) with the live Payment Link URL.
3. [ ] Set `STRIPE_WEBHOOK_SECRET` in Cloudflare Pages to the live signing secret.
4. [ ] Build and deploy the changes via `npm run deploy`.
5. [ ] Perform a live smoke test run to confirm no JS exceptions on `/sponsor` page.

---

## Section 6: Ongoing Operations

1. **Sponsor Onboarding**:
   - When a new customer completes checkout:
     - Stripe sends the webhook.
     - D1 auto-allocates the lowest available slot number and sets `active = 1` with their name, email, URL, and tagline.
     - Email the sponsor requesting their high-resolution transparent logo.
     - Upload logo to hosting and update in database:
       ```bash
       wrangler d1 execute illustratewords-sponsors --remote --command="UPDATE sponsors SET logo_url='<LOGO_CDN_URL>' WHERE stripe_subscription_id='<SUB_ID>'"
       ```
2. **Subscription Deactivations**:
   - If a customer cancels, the Stripe webhook auto-resets the slot, returning it to the pool of available inventory.
3. **Periodic Maintenance**:
   - Monthly: Review sponsor slots alignment.
   - Quarterly: Update visitor/session traffic metrics on the `/sponsor` page.
