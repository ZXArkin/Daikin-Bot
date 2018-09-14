const Discord = require("discord.js");

exports.run = (client, msg, args) => {

    msg.channel.send({embed: {
        color: 0xDCA741,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        description: `${client.user.username} - A Discord bot for the new age which does anything you want`,
        fields: [{
            name: "Author",
            value: `BW Tech#1434`,
           inline: true
          },
          {
            name: "Bot version",
            value: `v1.2.2`,
            inline: true
          },
          {
            name: "Discord.js version",
            value: `v${Discord.version}`,
            inline: true
          },
          {
            name: "Node.js version",
            value: `${process.version}`,
            inline: true
          },
          {
            name: "Memory Usage",
            value: (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + `MB`,
            inline: true
          },
          {
            name: "Support Server",
            value: `[Join](https://discord.gg/5h86cH9)`,
            inline: true
          },
        ],
        footer: {
          text: `Serving ${client.guilds.size} servers with ${client.users.size} users.`
            }
        }
    });
    console.log(`Treating ${msg.content} by ${msg.author.tag} from ${msg.guild} as a command.`);
    };
  config: {}
