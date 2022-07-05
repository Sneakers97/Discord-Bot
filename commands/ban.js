module.exports = {
    name: 'ban',
    description: "ban specific users",
    execute(message, args, client){
        
        //HIERARCHY - n
        //Ban individual
        message.guild.members.ban('USER_ID')
        
        console.log("banned specific users")
    }
}
