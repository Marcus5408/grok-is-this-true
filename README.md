# 🤖 @Grok is this true?

![screenshot](./image.png)

This is a simple AI bot that works on **Slack** and **Telegram** - kind of like Grok, but self-hosted and running on your terms.

## 🚀 Features

- Supports **Slack** and **Telegram**
- Built with **pnpm** for fast, efficient installs
- Easily extendable with custom commands or message handling
- Powered by OpenAI (or your model of choice)

## 🛠️ Getting Started

```bash
git clone https://github.com/NeonGamerBot-QK/grok-is-this-true.git
cd grok-is-this-true
pnpm install
pnpm start
```

## 🔐 Configuration

Create a `.env` file with the following:

```env
TELEGRAM_TOKEN=your_telegram_bot_token
SLACK_BOT_TOKEN=your_slack_bot_token
SLACK_APP_TOKEN=xapp
```

## 📦 Dependencies

- `pnpm` for package management
- `@slack/bolt` for Slack bot support
- `node-telegram-bot-api` for Telegram
