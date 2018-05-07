exports.run = (client, msg, args) => {
    let music = args.join(" ");
    msg.channel.send(`:notes: Music is coming soon!`);
    console.log(`[info] Treating ${msg.content} by ${msg.author.tag} from ${msg.guild} as a command.`);
};
  config: {}