exports.run = (client, msg, args) => {
    msg.channel.send({embed: {
      color: 0x194596,
      author: {
        name: client.user.username,
        icon_url: client.user.avatarURL
    },
    description: `Python < JS`,
}
});  
  console.log(`[info] Treating ${msg.content} by ${msg.author.tag} from ${msg.guild} as a command.`);
};
config: {}
