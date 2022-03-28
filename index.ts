import DiscordJS, { Intents } from 'discord.js'
import dotenv from 'dotenv'
dotenv.config()

const client = new DiscordJS.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
})

client.on('ready', () => {
    console.log('The bot is ready !')
})

client.on('messageCreate', (message) => {
    if (message.content === 'ping') {
        message.reply({
            content: 'pong',
        })
    }
    if (message.content === 'quân') {
        message.reply({
            content: 'Đang code bot r kêu cái j !'
        })
    }
    if (message.content === 'khanh') {
        message.reply({
            content: 'Đang nhắn với ĐLYN rồi'
        })
    }
})

client.login(process.env.TOKEN)