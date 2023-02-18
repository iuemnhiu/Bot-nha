const { MessageEmbed } = require('discord.js');
const ayarlar = require('../../ayarlar.json');
var version = ayarlar.versionbot;
var img = ayarlar.img;
var roleID = ayarlar.roleID;

module.exports = {
    name: 'stop',
    description: 'Dừng cuộc tấn công',
    type: 'CHAT_INPUT',
    cooldown: 10,

  run: async (client, interaction) => {

    if (!interaction.member.roles.cache.has(roleID))
      return interaction.reply({
        embeds: [
          new MessageEmbed()
            .setColor("RANDOM")
            .setDescription(`Chỉ có <@&${roleID}> mới được dùng lệnh này.`)
            .setFooter('© Developer: MâyCute#4900', img)
            .setTimestamp(),
        ],
      });

        var exec = require('child_process').exec
                exec(`taskkill /f /im python.exe`, (error, stdout, stderr) => {
            });
            console.log('Dừng lại tất cả cuộc tấn công:' +  interaction.guild.id)
            const embed = new MessageEmbed()
                .setColor('RANDOM')
                .setTitle(version)
                .setDescription("```css\n[ TẤT CẢ CUỘC TẤN CÔNG ĐÃ DỪNG LẠI ]\n\```")
                .setFooter('© Developer: MâyCute', img)
                .setTimestamp()
            interaction.reply({ embeds: [embed] });
        }       
}