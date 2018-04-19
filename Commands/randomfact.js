exports.run = (client, msg, args) =>
{
    var availablefacts = [
        `Twitch Desktop servers are 95% looking like Discord servers.`,
        `Windows 10 S can be the worst OS for home use on a real hardware.`,
        `Minecraft Pocket Edition can also be played on a PC, not only on mobile.`
    ]
    var fact = availablefacts[Math.floor(Math.random() * availablefacts.length)];
    msg.channel.send({
        embed: {
            color: 0x194596,
            author: {
                name: `${client.user.username}`,
                icon_url: client.user.avatarURL
            },
            title: `:white_check_mark: Here's your fun fact:`,
            description: fact.toString(),
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