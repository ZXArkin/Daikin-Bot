exports.run = (client, msg, args) => {
    var rpsArray = [
        `Rock :black_circle:`,
        `Paper :page_facing_up:`,
        `Scissors :scissors:`
    ]
    var rps = rpsArray[Math.floor(Math.random() * rpsArray.length)];
	msg.channel.send({embed: {
        color: 0x00ff00,
        title: `I choose...`,
        description: rps.toString(),
    }
});
}
config: {}