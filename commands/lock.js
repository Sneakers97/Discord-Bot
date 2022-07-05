module.exports = {
    name: 'lock',
    description: "locks all text channels",
    
    execute(message, args, client){

        const role = message.guild.roles.cache.find(role => role.name === "@everyone");

        const channels = message.guild.channels.cache.filter(c => c.guild && c.type === 'GUILD_TEXT');
        Promise.all(channels.map(c => c.permissionOverwrites.edit(role, {
            SEND_MESSAGES: false
        })))

        console.log('guild locked')
    }
}
