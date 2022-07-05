module.exports = {
    name: 'delete',
    description: "delete and replace text",
    execute(message, args, client){
        const channel = message.guild.channels.cache.get('CHANNEL_ID');
        
        channel.bulkDelete(99, true);
        channel.send('\n\n**CHANNEL HAS BEEN WIPED FOR YOUR SAFETY**\n\n');
        
        console.log("replaced text in channel")
    }
}
