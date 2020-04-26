const Discord = require('discord.js')
const bot = new Discord.Client()

bot.login('NzA0MDMyMTk3ODk5ODQ1ODIz.XqXQow.2J4S2-dFwPclWyfTTYF3tgd82Ek')

bot.on('message', function(message){
    if(message.content === '!init?')
    {
        message.reply("yes i am here ")
    }
})