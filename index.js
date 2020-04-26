const Discord = require('discord.js')
const bot = new Discord.Client()

bot.login('insert your token here')

bot.on('message', function(message){
    if(message.content === '!init?')
    {
        message.reply("yes i am here ")
    }
})