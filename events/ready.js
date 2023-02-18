const db = require('../database');
const moment = require('moment');
const { Collection } = require('discord.js');

module.exports = async (client, message) => {

    console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Kích Hoạt, Lệnh đã tải thành công!`);
    console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Đã kết nối với tên ${client.user.username}!`);

    const serverData = await db.get(message.guildId) || { prefix: '.' };
    const prefix = serverData.prefix;
    let statusArray = [`/help`, `${prefix}help`, `Đang Chơi FiFai`, `Mây Cute`];
    setInterval(function () {
      let status = statusArray[Math.floor(Math.random() * statusArray.length)];
      client.user.setPresence({
        status: "online",
        activities: [
          {
            name: status,
            type: "PLAYING",
          },
        ],
      });
    }, 10000);
};