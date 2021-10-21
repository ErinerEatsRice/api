const fs = require('fs')
const chalk = require('chalk')
module.exports = (app, client) => {
  fs.readdirSync('/home/runner/api/enpoints/').forEach((dir) => {
    const enpoints = fs.readdirSync(`/home/runner/api/enpoints/${dir}/`)
    for (let files of enpoints) {
      let pull = require(`/home/runner/api/enpoints/${dir}/${files}`)
      client.enpoints.set(pull.name, pull)
      app.get(`/${pull.name}`, (req, res) => {
        if (dir != 'main') client.db.add('total', 1)
        pull.run(req, res, client)
      })
    }
  })
}