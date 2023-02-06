const { Telegraf, Markup } = require('telegraf');
require('dotenv').config()
const ourConst = require('./const')
const bot = new Telegraf(process.env.BOT_TOKEN)


bot.start((ctx) => ctx.reply(`Привет ${ctx.message.from.first_name ? ctx.message.from.first_name : 'Незнакомец'}!`))
bot.help((ctx) => ctx.reply(ourConst.commands))
bot.command('course', async (ctx) => { // тут создает колличество кнопок в ТГ. обязательно через запятую
    try{
        await  ctx.replyWithHTML('<b>Задачи</b>', Markup.inlineKeyboard(
          [
              [Markup.button.callback('CodeWars', 'btn_1'), Markup.button.callback('LeetCode', 'btn_2')],
              [Markup.button.callback('Qwestions', 'btn_3')]
          ]
          ))
    } catch(error){
        console.error('Какая-то херь случилась', error)
    }
    
})

function actionBot(name, src, text){
    bot.action(name, async (ctx) => {
        try{
        await ctx.answerCbQuery()
        if( src !== false){
            await ctx.replyWithPhoto({
                source: src
            })
        }
        await ctx.replyWithHTML(text , {
            disable_web_page_preview: true
         })
        }catch(error){
            console.error('What a hell!', error);
        }
    
    })
}
actionBot('btn_1', './img/1.png', ourConst.text1)
actionBot('btn_2', './img/2.jpeg', ourConst.text2)
actionBot('btn_3', false, ourConst.text3)

// /Users/aleksandrbogatov/Desktop/telegram bot/img

bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))