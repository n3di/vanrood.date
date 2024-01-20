const axios = require("axios");

let access_token = "";

const eventTypes = ["stream.online", "stream.offline"];

const eventTypesConfig = {
  "stream.online": {
    type: "stream.online",
    version: "1",
    condition: {
      broadcaster_user_id: process.env.BROADCASTER_ID,
    },
  },
  "stream.offline": {
    type: "stream.offline",
    version: "1",
    condition: {
      broadcaster_user_id: process.env.BROADCASTER_ID,
    },
  },
};

axios
  .post(
    "https://id.twitch.tv/oauth2/token" +
      "?client_id=" +
      process.env.TWITCH_CLIENT_ID +
      "&client_secret=" +
      process.env.TWITCH_CLIENT_SECRET +
      "&grant_type=client_credentials" +
      "&scope=analytics:read:extensions analytics:read:games bits:read channel:edit:commercial " +
      "channel:manage:broadcast channel:manage:extensions channel:manage:polls channel:manage:predictions " +
      "channel:manage:redemptions channel:manage:schedule channel:manage:videos channel:read:editors " +
      "channel:read:goals channel:read:hype_train channel:read:polls channel:read:predictions " +
      "channel:read:redemptions channel:read:stream_key channel:read:subscriptions clips:edit moderation:read " +
      "moderator:manage:banned_users moderator:read:blocked_terms moderator:manage:blocked_terms " +
      "moderator:manage:automod moderator:read:automod_settings moderator:manage:automod_settings " +
      "moderator:read:chat_settings moderator:manage:chat_settings user:edit user:edit:follows " +
      "user:manage:blocked_users user:read:blocked_users user:read:broadcast user:read:email user:read:follows " +
      "user:read:subscriptions channel:moderate chat:edit chat:read whispers:read whispers:edit " +
      "channel:read:charity moderator:read:shield_mode moderator:manage:shield_mode moderator:read:shoutouts " +
      "moderator:manage:shoutouts moderator:read:followers"
  )
  .then((response: any) => {
    const responseData = response.data;
    access_token = responseData.access_token;

    for (let i = 0; i < eventTypes.length; i++) {
      axios
        .post()
        .then(() => {
          console.log(i, "Webhook successfully established: " + eventTypes[i]);
        })
        .catch((webhookError: any) => {
          console.log("Webhook creation error: " + webhookError);
        });
    }
  })
  .catch((error: any) => {
    console.log(error);
  });

const twitchWebhookEventHandler = (webhookEvent: any) => {
  // Do whatever crazy stuff you want to do with events here!
  // For information on individual event attributes go to
  // https://dev.twitch.tv/docs/eventsub/eventsub-subscription-types
  const webhookSubscriptionType = webhookEvent.subscription.type;
  let eventUsername = webhookEvent.event.user_name
    ? webhookEvent.event.user_name
    : "";

  if (
    webhookSubscriptionType === "stream.online" ||
    webhookSubscriptionType === "channel.update"
  ) {
    setTimeout(() => {
      // Put your code here to do something 30 seconds after the stream goes live,
      // or you change the stream title or game.
    }, 30000);
  }
};
