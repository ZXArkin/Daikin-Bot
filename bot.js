const fs = require("fs");

const Discord = require("discord.js");
const cowsay = require("cowsay");
const client = new Discord.Client();
const config = require("./Configuration/auth.json");

client.on('ready', () => {
    console.log(`[info] Successfully logged in as ${client.user.tag}!`);
    console.log(`[info] Serving in ${client.guilds.size} servers, with ${client.users.size} users on ${client.channels.size} channels`)
    console.log(`[info] Type d!help for a list of commands!`)
    client.user.setActivity("Type d!help to help!", { type: `PLAYING`,});
    client.user.setStatus("online"); //Status: "Online", "idle", "Invisible" & "DnD".
});

client.on("guildCreate", guild => {
  console.log(`[serverJoin] [${client.guilds.size} guilds] ${client.user.username} just joined ${guild.name}! It has ${guild.memberCount} members`);
});

client.on("guildDelete", guild => {
  console.log(`[serverLeave] [${client.guilds.size} guilds] Well, this is awkward. ${client.user.username} just got kicked from ${guild.name}. It had ${guild.memberCount} members`);
});


client.on("message", msg => {
    if (msg.author.bot) return;
    if(msg.content.indexOf(config.prefix) !== 0) return;

    const args = msg.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    try {
      let commandFile = require(`./Commands/${command}.js`);
      commandFile.run(client, msg, args);
    } catch (err) {
      console.error(err);
    }
  });

// client.login(config.token);
client.login(process.env.BOT_TOKEN);
