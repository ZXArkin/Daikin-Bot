exports.run = (client, msg, args) => {
    if(!msg.member.roles.some(r=>["Moderator"].includes(r.name)) )
    return msg.channel.send(":x: You need **Moderator** role in order to use this command!");
    msg.channel.send(`:gear: Configuration settings for **${msg.guild.name}**:

**Mod Role Name**: Sapphire Mod`);
     console.log(`[info] Treating ${msg.content} by ${msg.author.tag} from ${msg.guild} as a command.`);
  };
      config: {}
