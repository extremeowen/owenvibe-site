/* Netlify Function: приймає форму з сайту і пересилає її в месенджер.
   Секрети живуть ТІЛЬКИ у змінних середовища Netlify — у браузер не потрапляють.

   Можна ввімкнути один або кілька каналів (усі, що налаштовані, отримають повідомлення):

   1) Telegram (потрібен бот):
        TELEGRAM_BOT_TOKEN — токен від @BotFather
        TELEGRAM_CHAT_ID   — твій числовий chat id

   2) Discord (БЕЗ бота — просто webhook):
        DISCORD_WEBHOOK_URL — Server Settings → Integrations → Webhooks → New Webhook → Copy URL

   3) ntfy (БЕЗ бота й без акаунта — push на телефон):
        NTFY_TOPIC — будь-який секретний рядок, напр. "owenvibe-form-9f3a"
        ставиш застосунок ntfy, підписуєшся на цей топік — і отримуєш пуші
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

function buildText({ name, contact, message }) {
  return [
    "Нове повідомлення з сайту",
    name ? `Ім'я: ${name}` : "",
    contact ? `Контакт: ${contact}` : "",
    "",
    message,
  ]
    .filter((line, index) => line !== "" || index === 3)
    .join("\n")
    .slice(0, 3900);
}

async function sendTelegram(text) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) return null;

  const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ chat_id: chatId, text, disable_web_page_preview: true }),
  });

  if (!response.ok) throw new Error(`telegram ${response.status}: ${await response.text()}`);
  return "telegram";
}

async function sendDiscord(text) {
  const url = process.env.DISCORD_WEBHOOK_URL;
  if (!url) return null;

  const response = await fetch(url, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      content: text.slice(0, 1900),
      username: "owenvibe",
    }),
  });

  if (!response.ok) throw new Error(`discord ${response.status}: ${await response.text()}`);
  return "discord";
}

async function sendNtfy(text) {
  const topic = process.env.NTFY_TOPIC;
  if (!topic) return null;

  const response = await fetch(`https://ntfy.sh/${encodeURIComponent(topic)}`, {
    method: "POST",
    headers: {
      "content-type": "text/plain; charset=utf-8",
      Title: "owenvibe: new message",
      Tags: "incoming_envelope",
    },
    body: text,
  });

  if (!response.ok) throw new Error(`ntfy ${response.status}: ${await response.text()}`);
  return "ntfy";
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

  const text = buildText({ name, contact, message });
  const channels = [sendTelegram, sendDiscord, sendNtfy];

  const results = await Promise.allSettled(channels.map((send) => send(text)));
  const delivered = [];
  let configured = false;

  results.forEach((result, index) => {
    if (result.status === "fulfilled" && result.value) {
      configured = true;
      delivered.push(result.value);
      return;
    }
    if (result.status === "rejected") {
      configured = true;
      console.error(channels[index].name, "failed:", result.reason?.message || result.reason);
    }
  });

  if (!configured) {
    return json(500, { error: "No delivery channel configured" });
  }

  if (!delivered.length) {
    return json(502, { error: "All channels failed" });
  }

  return json(200, { ok: true, delivered });
};
