import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

// This function is kept for legacy compatibility.
// Contact form email sending is handled directly via EmailJS from the frontend.
Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  return new Response(
    JSON.stringify({ message: "Email sending is handled by EmailJS on the frontend." }),
    { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
  );
});
