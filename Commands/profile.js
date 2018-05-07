exports.run = (client, msg, args) => {
    msg.channel.send({embed: {
        color: 0x194596,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        description: `Information for **${msg.author.username}**`,
        thumbnail: {
          url: msg.author.avatarURL
           },
          fields: [{
            name: ":hash: Discord Tag",
            value: `${msg.author.tag}`
          },
          {
            name: ":calendar_spiral: Account created",
            value: `${msg.author.createdAt}`,
            inline: true
          },
          {
            name: ":id:",
            value: `${msg.author.id}`,
            inline: true
          },
        ],
        timestamp: new Date(),
        footer: {
          icon_url: msg.author.avatarURL,
          text: `Requested by ${msg.author.tag}`
            }
