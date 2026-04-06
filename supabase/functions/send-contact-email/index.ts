import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

const RECIPIENT_EMAIL = "info@lriage.com";

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  try {
    const body = await req.json();
    const { name, furigana, email, tel, subject, menu, message } = body;

    const subjectLabels: Record<string, string> = {
      reserve: "ご予約について",
      menu: "メニューについて",
      other: "その他",
    };
    const menuLabels: Record<string, string> = {
      "hair-removal": "脱毛",
      facial: "フェイシャル",
      body: "ボディ",
      machine: "マシンケア",
      undecided: "未定",
    };

    const subjectText = subjectLabels[subject] || subject || "未選択";
    const menuText = menuLabels[menu] || menu || "未選択";

    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

    if (!RESEND_API_KEY) {
      return new Response(
        JSON.stringify({ error: "RESEND_API_KEY is not configured" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const emailBody = `
新しいお問い合わせが届きました。

━━━━━━━━━━━━━━━━━━━━━━
■ お名前: ${name}
■ ふりがな: ${furigana}
■ メールアドレス: ${email}
■ 電話番号: ${tel || "未入力"}
■ お問い合わせ種別: ${subjectText}
■ ご希望メニュー: ${menuText}
━━━━━━━━━━━━━━━━━━━━━━

■ メッセージ:
${message || "なし"}

━━━━━━━━━━━━━━━━━━━━━━
このメールはサイトのお問い合わせフォームから自動送信されました。
    `.trim();

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "LRiage お問い合わせ <onboarding@resend.dev>",
        to: [RECIPIENT_EMAIL],
        reply_to: email,
        subject: `【LRiage】お問い合わせ: ${subjectText} - ${name} 様`,
        text: emailBody,
      }),
    });

    if (!res.ok) {
      const errorData = await res.text();
      return new Response(
        JSON.stringify({ error: "Failed to send email", detail: errorData }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (err) {
    return new Response(
      JSON.stringify({ error: String(err) }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
