module.exports = {
    name: 'embed',
    description: "announcement embed",
    execute(message, args, client){
        
        const channel = message.guild.channels.cache.get('CHANNEL_ID')
        
        channel.send('\n\n**Announcement embed!**\n\n@everyone\n\n');
        
        console.log("announcement embed sent")
    }
}
