exports.run = (client, msg, args) => {
    msg.channel.send({embed: {
      color: 0x194596,
      author: {
        name: `${client.user.username} documentation for fact command`,
        icon_url: client.user.avatarURL
      },
      fields: [{
        name: "Available fun facts",
        value: `3 (from 1/3)`
      },
      {
        name: "Usage",
        value: `%fact-X (replace the X with an available number)`
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
