exports.run = (client, msg, args) => {
    msg.channel.send(`Please wait until we check the bot's latency...`).then(function(m) {
        m.edit(`:ping_pong: **Pong!** - ${m.createdTimestamp - msg.createdTimestamp}ms.
:heartpulse: **Heartbeat** - ${Math.round(client.ping)}ms`);
    console.log(`[info] Treating ${msg.content} by ${msg.author.tag} from ${msg.guild} as a command.`);
    })
};
  config: {}
