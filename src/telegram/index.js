const TelegramBot = require("node-telegram-bot-api");
const env = require("../env");
const { makeAiRequest } = require("../ai");
const { QuickDB } = require("quick.db");
const bot = new TelegramBot(env.TELEGRAM_TOKEN, { polling: false });
const db = new QuickDB({ table: "telegram" });
(async () => {
  bot.onText(/@grok/, async (msg) => {
    const chatId = msg.chat.id;
    const content = msg.text;
    // bot.sendMessage(chatId, 'meow');
    const message = await bot.sendMessage(chatId, "Thinking...");
    const messages = [
      ...((await db.get(`${chatId}`)) || []),
      {
        role: "user",
        content: content,
      },
    ];
    const aiResponse = await makeAiRequest(messages);
    messages.push(aiResponse);
    await db.set(`${chatId}`, messages);
    bot
      .editMessageText(aiResponse.content, {
        chat_id: chatId,
        message_id: message.message_id,
      })
      .catch((e) => {
        console.error(e);
        bot.sendMessage(
          chatId,
          "An error occurred while processing your request. Please try again later.",
        );
      });
  });
})();

module.exports = {
  client: bot,
  start: () => {
    bot.startPolling();
  },
  stop: () => {
    bot.stopPolling();
  },
};
