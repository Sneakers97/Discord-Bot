const Discord = require('discord.js');

const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });

const prefix = '-';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('Bot is online!');
});

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    
    if (command === 'hello'){
        client.commands.get('ban').execute(message, args);
        client.commands.get('embed').execute(message, args);
        client.commands.get('delete').execute(message, args);
        client.commands.get('lock').execute(message, args);
    }
    
    if (command === 'lock'){
        client.commands.get('lock').execute(message, args);
    }
    if (command === 'embed'){
        client.commands.get('embed').execute(message, args);
    }
    if (command === 'ban'){
        client.commands.get('ban').execute(message, args);
    }
    if (command === 'delete'){
        client.commands.get('delete').execute(message, args);
    }
});

client.login('DISCORD_BOT_TOKEN');
