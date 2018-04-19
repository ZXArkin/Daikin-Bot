exports.run = (client, msg, args) => {

    let newName = args.join(" ")

if(msg.author.id !== "") return msg.channel.send(`:x: **Are you stupid?** Only bot developers can use this command.`);
client.user.setUsername(`${newName}`)
msg.channel.send(`:white_check_mark: My username is now **${newName}**.`)
 console.log(`[info] Treating ${msg.content} by ${msg.author.tag} from ${msg.guild} as a command.`);
}
config: {}
