const cooldown = new Map()
module.exports = {
  name: 'suggest',
  aliases: 'sus',
  category: 'api',
  run: async (client, message, args) => {
    if (!args[0]) return message.reply('You have nothing to suggest.')
    if (cooldown.has(message.author.id)) return message.channel.send(`Don't worry you will able to suggest again in ${require('pretty-ms')(cooldown.get(message.author.id) - Date.now(), { verbose: true })}`)
    message.reply('Your suggestion has been sent to the developer.')
    client.users.cache.get('827809019334099004').send(`
From \`${message.author.tag} | ${message.author.id}\`:
${args.join(' ')}
`)
    cooldown.set(message.author.id, Date.now() + 1800000)
    setTimeout(
      () => {
        cooldown.delete(message.author.id)
      }, 1800000
    )
  }
}