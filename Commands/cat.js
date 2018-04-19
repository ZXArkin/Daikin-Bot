exports.run = async (client, msg, args) => {
    const superagent = require("superagent");
    const { body } = await superagent
        .get('http://random.cat/meow');
    msg.channel.send({embed: {
            color: 0x194596,
            author: {
                name: `${client.user.username}`,
                icon_url: client.user.avatarURL
            },
            title: `:cat: Here's your cat...`,
            description: `*Aww so cute...*`,
            image: {
                url: body.file
            },
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