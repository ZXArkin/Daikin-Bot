exports.run = (client, msg, args) => {
	const member = <message>.mentions.members.first();
    member.kick();
});

config: {}