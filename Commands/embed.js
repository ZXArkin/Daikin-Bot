exports.run = (client, msg, args) => {
    let text = args.join(" ");
    msg.channel.send({embed: {
        color: 0x194596,
        description: `${text}`,
          }
    });
    console.log(`[info] Treating ${msg.content} by ${msg.author.tag} from ${msg.guild} as a command.`);
};
  config: {}
