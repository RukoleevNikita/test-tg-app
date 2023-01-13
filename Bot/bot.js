const { Telegraf } = require("telegraf");
const TOKEN = "5415354041:AAEJTd7ZYLNlqzIXHaqX2e8bjGOZTICjTYk";
const bot = new Telegraf(TOKEN);

const web_link = "https://jocular-babka-1414d8.netlify.app";

bot.start((ctx) =>
  ctx.reply("Welcome :)))))", {
    reply_markup: {
      keyboard: [[{ text: "web app", web_app: { url: web_link } }]],
    },
  })
);

bot.launch();
