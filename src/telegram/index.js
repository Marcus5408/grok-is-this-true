const TelegramBot = require('node-telegram-bot-api');
const env = require('../env')

const bot = new TelegramBot(env.TELEGRAM_TOKEN, { polling: true });

bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 'meow');
})

module.exports =  {
    client: bot,
    start: () => {
        bot.startPolling()
    }, 
    stop: () => {
        bot.stopPolling()
    }
}