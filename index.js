const { Client, Message, MessageEmbed, Collection  } = require('discord.js');
const client = new Client({
  messageCacheLifetime: 60,
  fetchAllMembers: false,
  messageCacheMaxSize: 10,
  restTimeOffset: 0,
  restWsBridgetimeout: 100,
  disableEveryone: true,
  partials: ['MESSAGE', 'CHANNEL', 'REACTION']
});
module.exports = client;


//config
const config = require("./config/config.json");
const prefix = config.prefix;
const token = config.token;

//event ready
client.on("ready", () => {
  //console bot online
  console.log(`${client.user.tag} Bot Online`);
  //activity client
  client.user.setActivity(`${client.user.tag} Online`);
});
// Message events
client.on('message', message => {
  if (message.content.startsWith(prefix + "ping")) {
    message.channel.send(`**${client.user.username}** Back in speed **${client.ws.ping}**!`);
  }

  if (message.content.startsWith(prefix + "iq")) {
    const iq = Math.floor(Math.random() * 226);
    const embed = new MessageEmbed() // Prettier()
      .setTitle(":brain: IQ Test:")
      .setDescription(":bulb: " + message.author.username + " IQ: `" + iq + "`")
      .setColor("RANDOM")
      .setTimestamp();
    message.channel.send(embed);
  }
});

client.login(token)




