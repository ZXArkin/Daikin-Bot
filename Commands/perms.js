exports.run = (client, msg, args) => {
    msg.author.send({embed: {
        color: 0x194596,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        description: "Needed permissions for this bot:",
          fields: [{
            name: "Embed Links",
            value: "This permission is needed for the bot to send all the commands with embed"
          },
          {
            name: "Read & Send Messages",
            value: "This permission is needed for the bot to send all the commands"
          },
        ],
        footer: {
          icon_url: msg.author.avatarURL,
          text: `Sent by ${msg.author.tag} at ${msg.createdAt}`
            }
        }
    });
    console.log(`[info] Treating ${msg.content} by ${msg.author.tag} from ${msg.guild} as a command.`);
    };
      config: {}
