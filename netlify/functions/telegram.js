/* Netlify Function: приймає форму з сайту і пересилає її в Telegram.
   Токен бота живе ТІЛЬКИ в змінних середовища Netlify — у браузер він не потрапляє.

   Змінні середовища (Site configuration → Environment variables):
     TELEGRAM_BOT_TOKEN — токен від @BotFather
     TELEGRAM_CHAT_ID   — твій числовий chat id
*/

const LIMITS = { name: 80, contact: 120, message: 2000 };

function json(statusCode, body) {
  return {
    statusCode,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "no-store",
    },
    body: JSON.stringify(body),
  };
}

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return json(405, { error: "Only POST is allowed" });
  }

  let payload;
  try {
    payload = JSON.parse(event.body || "{}");
  } catch {
    return json(400, { error: "Bad JSON" });
  }

  // пастка для ботів: поле приховане, людина його не заповнить
  if (payload["bot-field"]) {
    return json(200, { ok: true });
  }

  const name = String(payload.name || "").trim().slice(0, LIMITS.name);
  const contact = String(payload.contact || "").trim().slice(0, LIMITS.contact);
  const message = String(payload.message || "").trim().slice(0, LIMITS.message);

  if (!message) {
    return json(400, { error: "Message is empty" });
  }

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    return json(500, { error: "Telegram is not configured" });
  }

  const lines = [
    "Нове повідомлення з сайту",
    name ? `Ім'я: ${name}` : "",
    contact ? `Контакт: ${contact}` : "",
    "",
    message,
  ].filter((line, index) => line !== "" || index === 3);

  const text = lines.join("\n").slice(0, 3900);

  try {
    const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        disable_web_page_preview: true,
      }),
    });

    if (!response.ok) {
      const detail = await response.text();
      console.error("telegram error", response.status, detail);
      return json(502, { error: "Telegram rejected the message" });
    }
  } catch (error) {
    console.error("telegram request failed", error);
    return json(502, { error: "Telegram request failed" });
  }

  return json(200, { ok: true });
};
