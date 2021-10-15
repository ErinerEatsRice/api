const eightball = require('/home/runner/api/assets/fun/8ball.json')
const db = require('quick.db')
module.exports = {
  name: 'fun/8ball',
  run: async (req, res) => {
    const random = eightball[Math.floor(Math.random() * eightball.length)]
    res.json({
      answer: random
    })
    db.add('total', 1)
  }
}