const express = require('express')
const app = express()
const handler = require('./handler/route.js')
handler(app)
app.get('/*', (req, res) => {
  res.send(`<meta http-equiv="refresh" content="0;url=https://api.eriner.repl.co/home" />`)
})
app.listen(6969, () => console.log('API is up'))
app.set('json spaces', 2)
