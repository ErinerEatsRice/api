const Discord = require('discord.js')
module.exports = {
  name: 'help',
  category: 'utility',
  run: async (client, message, args) => {
    const help = new Discord.MessageEmbed()
    .setTitle('Help Page')
    .addField('Api', `\`${client.commands.filter(x => x.category === 'api').map(e => e.join(', '))}\``)
    .addField('Utility', `\`${client.commands.filter(x => x.category === 'utility').map(e => e.join(', '))}\``)
    .setColor('RANDOM')
    message.channel.send(help)
  }
}