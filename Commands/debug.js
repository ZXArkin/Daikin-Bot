const Discord = require("discord.js");

exports.run = (client, msg, args, config) => {
    msg.channel.send({embed: {
        color: 0x194596,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
          fields: [{
            name: "Process memory usage",
            value: (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + `MB`,
          },
              {
            name: ":busts_in_silhouette: Maintainers and developers",
            value: "``",
            inline: true
          },
          {
            name: ":bust_in_silhouette: Bot profile",
            value: `${client.user.id}:hash:${client.user.discriminator}`,
          },
          {
            name: ":radio_button: Last restart",
            value: `${client.readyAt}`
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
    
