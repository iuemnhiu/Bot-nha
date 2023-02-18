const Keyv = require('keyv');
require('dotenv').config();
const ayarlar = require('./ayarlar.json');
var mongodb = ayarlar.mongodb;

const db = new Keyv(mongodb || 'sqlite://database.sqlite');

module.exports = db;