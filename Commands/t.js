exports.run = (client, msg, args) => {
    let tag = args.join(" ");
    msg.channel.send(`:calendar_spiral: Coming soon!`);
    console.log(`[info] Treating ${msg.content} by ${msg.author.tag} from ${msg.guild} as a command.`);
};
  config: {}