import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface SubmissionPayload {
  type: string;
  table: string;
  record: {
    id: string;
    submitter_name: string;
    submitter_email: string;
    title: string;
    body: string;
    created_at: string;
  };
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  try {
    const payload: SubmissionPayload = await req.json();
    const { record } = payload;

    const adminEmail = Deno.env.get("ADMIN_EMAIL");
    const siteUrl = Deno.env.get("SITE_URL") ?? "https://example.com";
    const resendApiKey = Deno.env.get("RESEND_API_KEY");

    if (!adminEmail || !resendApiKey) {
      return new Response(JSON.stringify({ error: "Missing configuration" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const bodyPreview = record.body.slice(0, 200);
    const adminUrl = `${siteUrl}/admin/submissions`;

    const emailBody = `
新規投稿が届きました。

投稿者名: ${record.submitter_name}
タイトル: ${record.title}

本文（先頭200文字）:
${bodyPreview}${record.body.length > 200 ? "..." : ""}

管理画面で確認: ${adminUrl}
    `.trim();

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "noreply@resend.dev",
        to: adminEmail,
        subject: `【お知らせ投稿】${record.submitter_name}様より新規投稿`,
        text: emailBody,
      }),
    });

    if (!res.ok) {
      const errText = await res.text();
      return new Response(JSON.stringify({ error: errText }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: String(err) }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
