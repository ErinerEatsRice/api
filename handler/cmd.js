const fs = require('fs')
const path = '/home/runner/api/commands'
const chalk = require('chalk')
module.exports = client => {
    fs.readdirSync(path).forEach((dir) => {
        const command = fs.readdirSync(`${path}/${dir}/`)
        for (let files of command) {
          let cmd = require(`${path}/${dir}/${files}`)
          if (cmd.name) client.commands.set(cmd.name, cmd)
          if (cmd.aliases && Array.isArray(cmd.aliases)) cmd.aliases.forEach(alias => client.aliases.set(alias, cmd.name))
          console.log(cmd.name)
        }
    })
} 
