exports.run = (client, msg, args) => {
msg.channel.send({embed: {
    color: 0x194596,
    author: {
      name: client.user.username + " Credits",
      icon_url: client.user.avatarURL
    },
    description: "Author of the bot: **ZXByte#8075**",
      fields: [{
        name: ":tools: Contribuitors",
        value: "There are no contribuitors for this bot. If you want to be on this list just contribute to this bot on GitHub."
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
