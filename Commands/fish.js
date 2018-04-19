exports.run = (client, msg, args) => {
    var stuffs = [
        `Shoe`, `Raw Salmon`, `Raw Fish`
    ]
    var fish = stuffs[Math.floor(Math.random() * stuffs.length)];
    msg.channel.send(`Flipping a fish...`).then(function(m) {
        m.edit(`:fish: **You flipped**: ${fish.toString()} \n\`\`\`Enjoy!\`\`\``);
    console.log(`[info] Treating ${msg.content} by ${msg.author.tag} from ${msg.guild} as a command.`);
    })
};
  config: {}
