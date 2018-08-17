exports.run = (client, msg, args) => {
    msg.channel.send({embed: {
        color: 0x194596,
        author: {
          name: `${client.user.username}'s Home!`,
          icon_url: client.user.avatarURL
        },
          fields: [{
            name: ":information_source: System Information",
            value: ``
          },
              {
            name: ":computer: Hosting in",
            value: `**ZXByte**'s PC`
          },
          {
            name: ":robot: 24/7/365?",
            value: `No.`
          },
          {
            name: ":bar_chart: Used RAM (by ZXByte)",
            value: `NaN of NaN RAM`
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

