// GET /api/sponsors — Fetch active sponsor slots
// Replicates edge-cached, CORS-compliant API endpoint for Illustrate Words

export async function onRequestGet(context) {
  const headers = {
    "Content-Type": "application/json",
    "Cache-Control": "public, max-age=300",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type"
  };

  try {
    const db = context.env.DB;
    if (!db) {
      return new Response(
        JSON.stringify({ error: "Database binding 'DB' is not configured." }),
        { status: 500, headers }
      );
    }

    // Query D1 for active sponsors, ordered by slot_number
    const { results } = await db
      .prepare(
        "SELECT id, slot_number, name, logo_url, website_url, tagline FROM sponsors WHERE active = 1 ORDER BY slot_number ASC"
      )
      .all();

    return new Response(
      JSON.stringify({ sponsors: results }),
      { status: 200, headers }
    );
  } catch (err) {
    return new Response(
      JSON.stringify({ error: "Internal Server Error", message: err.message }),
      { status: 500, headers }
    );
  }
}

// OPTIONS preflight handler for CORS
export async function onRequestOptions() {
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
      "Cache-Control": "public, max-age=86400"
    }
  });
}
