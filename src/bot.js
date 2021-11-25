require('dotenv').config();

const fetch = require('node-fetch');
const { Client, Intents, Message } = require('discord.js');
const bot = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const prefix = "$";
const rollDice = () => Math.floor(Math.random()  * 6) + 1;

function getQuote() {
    return fetch('https://zenquotes.io/api/random')
    .then(res => {
        return res.json()
    })
    .then(data => {
        return data[0]['q'] + " - " + data[0]['a']
    })
}

bot.on('ready', () => {
    console.log(`${bot.user.tag} has logged in.`);
});

// "hello" response
bot.on('messageCreate', async (message) => {
    if (message.author.bot) return;

    console.log(`[${message.author.tag}]: ${message.content}`);

    if (message.content === 'hello') {
        message.channel.send('hello');
    }
    if (message.content.startsWith(prefix)) {
        const [CMD_NAME, ...args] = message.content
        .trim()
        .substring(prefix.length)
        .split(/\s+/);
        // "kick" command
        if (CMD_NAME === 'kick') {
            if (!message.member.permissions.has('KICK_MEMBERS'))
            return message.reply('You do not have permissions to use that command!');
        if (args.length === 0) return message.reply('Please provide an ID.');
        const member = message.guild.members.cache.get(args[0]);
        if (member) {
            member
            .kick()
            .then((member) => message.channel.send(`${member} was kicked. `))
            .catch((err) => message.channel.send('I cannot kick that user :('));
         } else {
             message.channel.send('That member was not found.');
         }
                // "ban" command
             } else if (CMD_NAME === 'ban') {
                if (!message.member.permissions.has('BAN_MEMBERS'))
                return message.reply('You do not have permissions to use that command!');
                if (args.length === 0) return message.reply('Please provide an ID.')
                try {
                    const user = await message.guild.members.ban(args[0]);
                    message.channel.send('User was banned successfully.');
                } catch (err) {
                    console.log(err);
                    message.channel.send('An error occured. Either I do not have permissions or the user was not found.');
                }
                // "inspire" command that generates a random inspirational quote
             } else if (CMD_NAME === 'inspire') {
                 getQuote().then(quote => message.channel.send(quote))
                // "rolldice" command that generates a random number between 1 - 6
             } else if (CMD_NAME === 'rolldice') {
                 message.reply('rolled a ' + rollDice());
             }
        }
});

bot.login(process.env.DISCORDJS_BOT_TOKEN);
