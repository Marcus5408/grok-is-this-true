const env = require('../env')
const { App } = require('@slack/bolt');

const app = new App({
  signingSecret: env.SLACK_SIGNING_SECRET,
  token: env.SLACK_BOT_TOKEN,
});

app.event("app_mentioned" , ({ event, ack, respond }) => {
    ack()
    respond("meow")
})

module.exports = {
    start: async (env) => {
        // Start the app
        await app.start();
        console.log(`[SLACK] uppies:3`)
    },
    stop: async () => {
        // Stop the app
        await app.stop();
    },
    client: app,
}