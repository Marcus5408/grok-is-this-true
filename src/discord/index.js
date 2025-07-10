import { Client, Events, GatewayIntentBits } from 'discord.js';
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages] });
client.on(Events.ClientReady, () => {
 console.log(`[DISCORD] uppies :3`)   
})
client.on(Events.MessageCreate, (message) => {
    // check if it contains mention to grok
    if(message.author.bot) return;
    if(message.mentions.has(client.user)) {
        message.reply('meow');
    }
})

module.exports = {
    start: (env) => {
        client.login(env.DISCORD_TOKEN)
    },
    stop: () => {
        client.destroy()
    },
    client: client,
}