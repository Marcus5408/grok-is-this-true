const env = require('../env')
const { App } = require('@slack/bolt');

const app = new App({
  token: env.SLACK_BOT_TOKEN,
  socketMode: true,
  appToken: env.SLACK_APP_TOKEN
});

app.event("app_mention" , ({ event, ack, say }) => {
    // ack()
    // say("meow")
})

module.exports = {
    start: async (env) => {
        await app.start();
        console.log(`[SLACK] uppies:3`)
    },
    stop: async () => {
        await app.stop();
    },
    client: app,
}