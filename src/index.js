const telegram = require("./telegram");
const slack = require("./slack");
const env = require("./env");

const start = async () => {
  return await Promise.all([slack.start(env), telegram.start()]);
};
const stop = async () => {
  return await Promise.all([slack.stop(), telegram.stop()]);
};
(async () => {
  await start();
  console.log(`Started @grok is this true`);
})();
