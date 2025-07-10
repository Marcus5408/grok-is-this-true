require("dotenv/config")
const { z } = require('zod')

const envSchema = z.object({
    DISCORD_TOKEN: z.string(),
    SLACK_SIGNING_SECRET: z.string(),
    SLACK_BOT_TOKEN: z.string(),
    TELEGRAM_TOKEN: z.string()
})
module.exports = envSchema.parse(process.env)