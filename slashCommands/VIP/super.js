const { MessageEmbed } = require("discord.js")
const ayarlar = require('../../ayarlar.json');
var version = ayarlar.versionbot;
var roleAD = ayarlar.roleAD;
var img = ayarlar.img;


    module.exports = {
    name: 'super',
    description: 'SPAM SMS',
    type: 'CHAT_INPUT',
    cooldown: 60,
    options: [
    {
      name: "phone",
      description: "SĐT muốn Spam",
      required: true,
      type: "STRING",
    },
  ],

  run: async (client, interaction) => {

    if (!interaction.member.roles.cache.has(roleAD))
      return interaction.reply({
        embeds: [
          new MessageEmbed()
            .setColor("RANDOM")
            .setDescription(`Chỉ có <@&${roleAD}> mới được dùng lệnh này.`)
            .setFooter({ text: "© Developer: MâyCute#4900" })
            .setTimestamp(),
        ],
      });

    const phone = interaction.options.getString("phone")

    var exec = require('child_process').exec
      exec(`py sms.py ${phone} 200`, (error, stdout, stderr) => {
    });

    console.log('Một cuộc tấn công khởi chạy ID Discord:' +  interaction.guild.id)
      const embed = new MessageEmbed()
        .setColor("RANDOM")
        .setTitle(version)
        .addFields(
          {
            name: "`👨‍💻 Người Dùng:`",
            value: `\n [ ${interaction.user.username} ] \n`,
            inline: true,
          },
          {
            name: "`📱 Mục tiêu:`",
            value: `\n [ ${phone} ] \n`,
            inline: true,
          },
          {
            name: "`🔗 Method:`",
            value: `\n [ SMS & CALL ] \n`
          },
          {
            name: "`🕒 CoolDown:`",
            value: `\n [ 60 giây ] \n`,
            inline: true,
          },
          {
            name: "`💸 Plan:`",
            value: `\n [ SUPER ] \n`,
            inline: true,
          },
          {
            name: "`🤖 Bot:`",
            value: `\n [ Cloud 🤖 ] \n`,
            inline: true,
          },
          
          )
        .setImage('https://media3.giphy.com/media/jOZt5tdGYxzz0H6Nfi/giphy.gif')
        .setFooter('© Developer: MâyCute#4900', img)
        .setTimestamp();
          const countdownEmbed = new MessageEmbed()
            .setColor('RANDOM')
            .setTitle(version)
            .setDescription("ĐANG LOAD COOLDOWN...")
            .setImage("https://cdn.discordapp.com/attachments/1032269044952354817/1035539812331028560/LOADING.gif")
            .setFooter('© Developer: MâyCute#4900', img)
            .setTimestamp()
          interaction.reply({ embeds: [countdownEmbed] }).then((message) => {
              setTimeout(function () {
                interaction.editReply({ embeds: [embed] });
              }, 1500)
            })
    }
}