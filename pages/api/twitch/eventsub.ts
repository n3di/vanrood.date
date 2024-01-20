import { NextApiRequest, NextApiResponse } from "next";
import type { Readable } from "node:stream";
import crypto from "crypto";

export const config = {
  api: {
    bodyParser: false,
  },
};

async function buffer(readable: Readable) {
  const chunks = [];
  for await (const chunk of readable) {
    chunks.push(typeof chunk === "string" ? Buffer.from(chunk) : chunk);
  }
  return Buffer.concat(chunks);
}

const TWITCH_MESSAGE_ID = "Twitch-Eventsub-Message-Id".toLowerCase();
const TWITCH_MESSAGE_TIMESTAMP =
  "Twitch-Eventsub-Message-Timestamp".toLowerCase();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const TWITCH_MESSAGE_SIGNATURE =
      "Twitch-Eventsub-Message-Signature".toLowerCase();
    const MESSAGE_TYPE = "Twitch-Eventsub-Message-Type".toLowerCase();

    // Notification message types
    const MESSAGE_TYPE_VERIFICATION = "webhook_callback_verification";
    const MESSAGE_TYPE_NOTIFICATION = "notification";
    const MESSAGE_TYPE_REVOCATION = "revocation";

    // Prepend this string to the HMAC that's created from the message
    const HMAC_PREFIX = "sha256=";

    let secret = getSecret();
    let message = getHmacMessage(req);
    let hmac = HMAC_PREFIX + getHmac(secret, message); // Signature to compare

    if (true === verifyMessage(hmac, req.headers[TWITCH_MESSAGE_SIGNATURE])) {
      console.log("signatures match");

      // Get JSON object from body, so you can process the message.
      let notification = JSON.parse(req.body);

      if (MESSAGE_TYPE_NOTIFICATION === req.headers[MESSAGE_TYPE]) {
        // TODO: Do something with the event's data.

        const buf = await buffer(req);
        const rawBody = buf.toString("utf8");

        return res.status(200).json({ message: "success", rawBody });
      } else if (MESSAGE_TYPE_VERIFICATION === req.headers[MESSAGE_TYPE]) {
        const buf = await buffer(req);
        const rawBody = buf.toString("utf8");

        return res.status(200).json({ message: "success", rawBody });
      } else if (MESSAGE_TYPE_REVOCATION === req.headers[MESSAGE_TYPE]) {
        const buf = await buffer(req);
        const rawBody = buf.toString("utf8");

        return res.status(200).json({ message: "success", rawBody });
      } else {
        res.status(204);
        console.log(`Unknown message type: ${req.headers[MESSAGE_TYPE]}`);
      }
    } else {
      res.setHeader("Allow", "POST");
      res.status(405).end("Method Not Allowed");
    }
  }
}

function getSecret() {
  // TODO: Get secret from secure storage. This is the secret you pass
  // when you subscribed to the event.
  return "4h42tq04rms1l9u44pwa6bchkw1k19";
}

// Build the message used to get the HMAC.
function getHmacMessage(request: any) {
  return (
    request.headers[TWITCH_MESSAGE_ID] +
    request.headers[TWITCH_MESSAGE_TIMESTAMP] +
    request.body
  );
}

// Get the HMAC.
function getHmac(secret: any, message: any) {
  return crypto.createHmac("sha256", secret).update(message).digest("hex");
}

// Verify whether our hash matches the hash that Twitch passed in the header.
function verifyMessage(hmac: any, verifySignature: any) {
  return crypto.timingSafeEqual(
    Buffer.from(hmac),
    Buffer.from(verifySignature)
  );
}
