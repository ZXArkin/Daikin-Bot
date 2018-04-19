exports.run = (client, msg, args) =>
    msg.channel.send({embed: {
            color: 0x194596,
            author: {
                name: client.user.username,
                icon_url: client.user.avatarURL
            },
            title: `:frame_photo: ${msg.author.username}'s avatar!`,
            image: {
                url: msg.author.avatarURL
            },
            timestamp: new Date(),
            footer: {
                icon_url: msg.author.avatarURL,
                text: `Requested by ${msg.author.tag}`
            }
        }
    });
  config: {}
