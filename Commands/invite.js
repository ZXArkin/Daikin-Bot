exports.run = (client, msg, args) => {
msg.channel.send({embed: {
    color: 0x194596,
  title: `:link: Almost there...`,
  description: `[Click here to invite me to your server](https://discordapp.com/oauth2/authorize?&client_id=${client.user.id}&scope=bot&permissions=-1)`,
}
}); 
    console.log(`[info] Treating ${msg.content} by ${msg.author.tag} from ${msg.guild} as a command.`);
};
  config: {}
