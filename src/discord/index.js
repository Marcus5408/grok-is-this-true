import { Client, GatewayIntentBits } from 'discord.js';
const client = new Client({ intents: [GatewayIntentBits.Guilds] });


module.exports = {
    start: () => {},
    stop: () => {},
    client: client,
}