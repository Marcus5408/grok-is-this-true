const env = require("../env");
const { App } = require("@slack/bolt");
const { QuickDB } = require("quick.db");
const { makeAiRequest } = require("../ai");
const db = new QuickDB({ table: "slack" });

const app = new App({
  token: env.SLACK_BOT_TOKEN,
  socketMode: true,
  appToken: env.SLACK_APP_TOKEN,
});

app.event("app_mention", async ({ event, ack, say }) => {
  // ack()
  // say("meow")
  //TODO: make it use prev thread convo
  const messages = [
    ...((await db.get(`${event.thread_ts || event.ts}`))
      ? await db.get(`${event.thread_ts || event.ts}`)
      : []),
    {
      role: "user",
      content: event.text,
    },
  ];

  const msg = await makeAiRequest(messages);
  messages.push(msg);
  await db.set(`${event.thread_ts || event.ts}`, messages);
  await say({
    text: msg.content,
    thread_ts: event.thread_ts || event.ts,
  });
});

module.exports = {
  start: async (env) => {
    await app.start();
    console.log(`[SLACK] uppies:3`);
  },
  stop: async () => {
    await app.stop();
  },
  client: app,
  db,
};
