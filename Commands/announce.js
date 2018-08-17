exports.run = (client, msg, args) => {
    if(!msg.member.roles.some(r=>["Moderator"].includes(r.name)) )
    return msg.channel.send(`:x: You need **Moderator** role in order to use this command!
SappWarn code: 0x0020`);
    let thing = args.join(" ");
    msg.delete();
    msg.channel.send({embed: {
        color: 0x194596,
        author: {
          name: `${msg.author.tag}`,
        },
        description: `${thing}`,
        thumbnail: {
            url: msg.author.avatarURL
             },
             timestamp: new Date(),
             footer: {
                text: `Announcement`
                  },
    }
    });
    console.log(`[info] Treating ${msg.content} by ${msg.author.tag} from ${msg.guild} as a command.`);
      };
  config: {}
