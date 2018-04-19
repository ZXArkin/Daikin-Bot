exports.run = (client, msg, args) => {
    msg.channel.send({embed: {
      color: 0x194596,
      author: {
        name: `${client.user.username}`,
        icon_url: client.user.avatarURL
      },
      title: `:white_check_mark: Alright, here's your fun fact:`,
      description: `Minecraft Pocket Edition can also be played on a PC, not only on mobile.`,
      footer: {
          icon_url: msg.author.avatarURL,
          text: `Sent by ${msg.author.tag} at ${msg.createdAt}`
            }
        }
  });
  console.log(`[info] Treating ${msg.content} by ${msg.author.tag} from ${msg.guild} as a command.`);
};
config: {}
