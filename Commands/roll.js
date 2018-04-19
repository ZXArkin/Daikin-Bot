exports.run = (client, msg, args) => {
    let question = args.join(" ");
    var dies = [
        `Oh, shocking. :one:`,
        `Eh... :two:`,
        `Okay. :three:`,
        `Hey! :four:`,
        `Pretty good. :five:`,
        `Noice. :six:`,
        `Sexy. :seven:`
    ]
    var roll = dies[Math.floor(Math.random() * dies.length)];
    msg.channel.send({embed: {
            color: 0x194596,
            title: `:game_die: The die rolls...`,
            description: `${roll.toString()}`
        }
    });
    console.log(`[info] Treating ${msg.content} by ${msg.author.tag} from ${msg.guild} as a command.`);
};
config: {}