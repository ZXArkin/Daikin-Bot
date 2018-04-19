exports.run = (client, msg, args) => {
    let question = args.join(" ");
    var replies = [
        `Yes`,
        `My reply is no`,
        `Outlook not so good`,
        `Most likely`,
        `Without a doubt`,
        `Very doubtful`,
        `It is decidedly so`,
        `Don't count on it`,
        `Outlook good`,
        `Better not tell you now`,
        `Concetrate and ask again`
    ]
    var magic8ball = replies[Math.floor(Math.random() * replies.length)];
    msg.channel.send({embed: {
            color: 0x194596,
            author: {
                name: `${client.user.username}`,
                icon_url: client.user.avatarURL
            },
            title: `The :8ball: replied with:`,
            description: `\`\`\`${magic8ball.toString()}\`\`\``,
            timestamp: new Date(),
            footer: {
                icon_url: msg.author.avatarURL,
                text: `Requested by ${msg.author.tag}`
            }
        }
    });
    console.log(`[info] Treating ${msg.content} by ${msg.author.tag} from ${msg.guild} as a command.`);
};
config: {}
