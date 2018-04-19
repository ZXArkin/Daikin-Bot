exports.run = (client, msg, args) => {
msg.channel.send("Pinging...").then(function(m) {
    m.edit(`:ping_pong: **Pong!** - Took ${m.createdTimestamp - msg.createdTimestamp}ms`);
}

)}
config: {}