const Discord = require('discord.js')
module.exports = {
  name: 'enpoints',
  run: async (client, message, args) => {
    const enpoints = new Discord.MessageEmbed()
        .setTitle('Title Lists')
        .setDescription(`GET/ ${client.enpoints.filter(x => x.path != 'main').map(e => e.name).join('\nGET/ ')}`)
        .setColor('RANDOM')
     message.channel.send(enpoints)
  }
}