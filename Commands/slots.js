const Discord = require("discord.js");

exports.run = (client, msg, args) => {

    responses = [
        ":soccer: | :cd: | :cat: \n:green_apple: | :cat: | :green_apple: \n:tennis: | :map: | :dvd: \n__**You lost!**__", 
        ":package: | :dog: | :basketball: \n:dvd: | :dvd: | :dvd: \n:apple: | :map: | :package: \n__**You won!**__",
        ":cd: | :cat: | :tennis: \n:tennis: | :green_apple: | :tennis: \n:package: | :cat: | :cd: \n__**You lost!**__",
        ":dvd: | :dog: | :map: \n:soccer: | :package: | :package: \n:dvd: | :green_apple: | :dog: \n__**You lost!**__",
        ":dog: | :dog: | :dog: \n:soccer: | :map: | :package: \n:dvd: | :green_apple: | :package: \n__**You won!**__",
    ];


    msg.channel.send({embed: {
        color: 0xDCA741,
        title: ":slot_machine: Playing the slots...",
        }
    }).then(function(m) {
        m.edit({embed: {
            color: 0x00ff00,
            description: (responses[Math.floor(Math.random() * responses.length)]),
            }
        });
    console.log(`Treating ${msg.content} by ${msg.author.tag} from ${msg.guild} as a command.`);
 
});
}
  config: {}

