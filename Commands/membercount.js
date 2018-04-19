exports.run = (client, msg, args) => {
    msg.channel.send({embed: {
      color: 0x194596,
      title: `:busts_in_silhouette: ${msg.guild.name} Member Count`,
      description: `This server currently has ${msg.guild.memberCount} members!`,
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
