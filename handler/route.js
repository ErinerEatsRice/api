const fs = require('fs')
const chalk = require('chalk')
module.exports = (app, client) => {
  fs.readdirSync('/home/runner/api/endpoints/').forEach((dir) => {
    const enpoints = fs.readdirSync(`/home/runner/api/endpoints/${dir}/`)
    for (let files of enpoints) {
      let pull = require(`/home/runner/api/endpoints/${dir}/${files}`)
      client.endpoints.set(pull.name, pull)
      app.get(`/${pull.name}`, (req, res) => {
       if (dir != 'main' && pull.name != 'info/stats') client.db.add('total', 1)
        pull.run(req, res, client).catch((err) => res.json({
          error: err.toString()
        }))
       if (dir != 'main' && pull.name != 'info/stats') console.log(`Enpoints => ${chalk.blue(pull.name)}`)
      })
    }
  })
}