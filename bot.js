const { Client, Intents, Collection } = require('discord.js');
const ayarlar = require('./ayarlar.json');
var token = ayarlar.token;

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
var colors = require('colors');
const mongoose = require("mongoose")

client.commands = new Collection();
client.aliases = new Collection();
client.categories = new Collection();
client.interactions = new Collection();
client.cooldowns = new Collection();

['event', 'slashCommand'].forEach(handler => require(`./handlers/${handler}`)(client));

client.on('ready', message => {

})

client.login(token);