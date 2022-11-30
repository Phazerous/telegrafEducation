const { Telegraf, Markup } = require('telegraf');

const data = require('./data.js');
const BOT_TOKEN = data.BOT_TOKEN;

if (!BOT_TOKEN) throw new Error('Bot token is required.')

const bot = new Telegraf(BOT_TOKEN);

const keyboard = Markup.inlineKeyboard([
    Markup.button.url('💼', 'https://github.com/Phazerous'),
    Markup.button.callback('Delete', 'delete')
]);

bot.start(ctx => ctx.reply('Welcome!'));
bot.help(ctx => ctx.reply('Help message'));
bot.on('message', ctx => ctx.copyMessage(ctx.message.chat.id, keyboard));
bot.action('delete', ctx => ctx.deleteMessage());

bot.launch();