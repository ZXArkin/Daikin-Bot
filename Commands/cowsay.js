exports.run = (client, msg, args) => {
	const cowsay = require("cowsay");
	let text = args.join(" ");
	msg.channel.send("```" + cowsay.say({
		text : text
	}) + "```")
	}
	config: {}