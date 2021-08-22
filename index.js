const Discord = require('discord.js');
const client = new Discord.Client({
  messageCacheLifetime: 60,
  fetchAllMembers: false,
  messageCacheMaxSize: 10,
  restTimeOffset: 0,
  restWsBridgetimeout: 100,
  disableEveryone: true,
  partials: ['MESSAGE', 'CHANNEL', 'REACTION']
});


//config
const config = require("./config/config.json");
const prefix = config.prefix;
const token = config.token;

// Message events
client.on('message', message => {
  if (message.content.startsWith("!ping")) {
    message.channel.send(`${client.ws.ping} Pong!`);
  }
});




