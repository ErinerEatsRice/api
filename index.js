const prefix = 'e?'
const Discord = require('discord.js')
const client = new Discord.Client()
client.commands = new Discord.Collection()
client.aliases = new Discord.Collection()
client.db = require('quick.db')
client.enpoints = new Discord.Collection()
require('./handler/cmd.js')(client)
client.on('message', (message) => {
  if (message.author.bot || !message.guild.id) return;
  if (!message.content.toLowerCase().startsWith(prefix.toLowerCase())) return;
  const args = message.content.slice(prefix.length).trim().split(/ +/g)
  const cmd = args.shift().toLowerCase()
  if (cmd.length === 0) return;
  let command = client.commands.get(cmd)
  if (!command) client.commands.get(client.aliases.get(cmd))
  if (command) command.run(client, message, args).catch((error) => {
    message.channel.send(`Error from: ${command.name}
\`\`\`js
${error}\`\`\``)
  })
})
client.on('ready', () => {
  console.log(client.user.tag)
})
client.login(process.env.token)
const express = require('express')
const app = express()
const handler = require('./handler/route.js')
handler(app, client)
app.get('/*', (req, res) => {
  res.send(`<meta http-equiv="refresh" content="0;url=https://api.eriner.repl.co/home" />`)
})
app.listen(6969, () => console.log('API is up'))
process.on('uncaughtException', (err) => {
  console.log(err.stack)
})
app.set('json spaces', 1)
