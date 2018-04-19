exports.run = async (client, msg, args) => {
    if (args.length < 1) return msg.channel.send(":x: Too few arguments provided! \nUse `poll <question>`");
    let question = args.join(" ");
    msg.delete();
    const pollTopic = await msg.channel.send({embed: {
            color: 0x194596,
            title: `:question: Poll!`,
            description: `\`\`\`${question}\`\`\``,
            timestamp: new Date(),
            footer: {
                icon_url: msg.author.avatarURL,
                text: `Poll created by ${msg.author.tag}`
            }
        }
    });
    pollTopic.react(`👍`);
    pollTopic.react(`👎`);
};