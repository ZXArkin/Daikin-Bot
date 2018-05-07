exports.run = (client, msg, args) => {

    let code = args.join(" ").slice(1);

    if(msg.author.id !== "327864603788967948") return;
    try {
        const code = args.join(" ");
        let evaled = eval(code);

        if (typeof evaled !== "string")
            evaled = require("util").inspect(evaled);

        msg.channel.send({embed: {
                color: 0x194596,
                title: `Evaluated!`,
                description: `\`\`\`xl\n${clean(evaled)}\n\`\`\``,
            }
        });

    } catch (err) {
        msg.channel.send({embed: {
                color: 0xff0000,
                title: `:x: Error while evaluating`,
                description: `\`\`\`xl\n${clean(err)}\n\`\`\``,
            }
        });
    };

    function clean(text) {
        if (typeof(text) === "string")
            return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
        else
            return text;
    }}

config: {}
