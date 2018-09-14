const Discord = require("discord.js");

exports.run = (client, msg, args) => {

    msg.channel.send({embed: {
        color: 0xDCA741,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        description: `:hammer: **Project Lead**: BW Tech#1434`,
        fields: [{
            name: "Helpers",
            value: `Casbas 234#5853 and Hydrogen#0002 (developers), TEC#0001 (bot hoster)`,
            inline: true
          },
        ],
        }
    });
    console.log(`Treating ${msg.content} by ${msg.author.tag} from ${msg.guild} as a command.`);
 
};
  config: {}
