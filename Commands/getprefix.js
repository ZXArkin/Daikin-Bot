exports.run = (client, msg, args) => {
    msg.channel.send(`:information_source: The command prefix is **s%**. For example, **s%ping**.`);
    console.log(`[info] Treating ${msg.content} by ${msg.author.tag} from ${msg.guild} as a command.`);
};
  config: {}
