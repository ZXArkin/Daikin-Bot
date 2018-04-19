exports.run = (client, msg, args) => {
    msg.channel.send({embed: {
      color: 0x194596,
      author: {
        name: client.user.username + " stats",
        icon_url: client.user.avatarURL
      },
      fields: [{
        name: "Guilds",
        value: `${client.guilds.size}`,
        inline: true
      },
      {
        name: "Users",
        value: `${client.users.size}`,
        inline: true
      },
      {
        name: "Channels",
        value: `${client.channels.size}`,
        inline: true
      },
      {
        name: "Shards",
        value: `1`,
        inline: true
      },
      {
        name: "Bot Version",
        value: `v1.3`,
        inline: true
      },
    ],
    timestamp: new Date(),
    footer: {
      icon_url: msg.author.avatarURL,
      text: `Requested by ${msg.author.tag}`
        }
                }
  });
  console.log(`[info] Treating ${msg.content} by ${msg.author.tag} from ${msg.guild} as a command.`);
};
config: {}
