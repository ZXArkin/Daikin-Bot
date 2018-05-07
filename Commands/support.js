exports.run = (client, msg, args) => {
    msg.channel.send({embed: {
            color: 0x194596,
            title: `:question: Need help?`,
            description: `If you need help with this bot, feel free to join [Sapphire Support](http://server.sapphirebot.cf). \nBefore asking any question, read the faq.`,
        }
    });
    console.log(`[info] Treating ${msg.content} by ${msg.author.tag} from ${msg.guild} as a command.`);
};
config: {}
