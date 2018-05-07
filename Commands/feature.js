exports.run = async (client, msg, args) => {
    let feature = args.join(" ");
    const freview = await client.channels.find('id', '383951459965861917').send({embed: {
            color: 0x194596,
            author: {
                name: client.user.username + " Feature Request",
                icon_url: client.user.avatarURL
            },
            description: feature,
            timestamp: new Date(),
            footer: {
                icon_url: msg.author.avatarURL,
                text: `Feature requested by ${msg.author.tag}`
            }
        }
    });
    freview.react(`✅`);
    freview.react(`❌`);
    freview.react(`📝`);
    msg.channel.send(":white_check_mark: Submitted feature to **Sapphire Support**.");
    console.log(`[info] Treating ${msg.content} by ${msg.author.tag} from ${msg.guild} as a command.`);
};
config: {}
