const eightball = require('/home/runner/api/assets/fun/8ball.json')
module.exports = {
  name: 'fun/8ball',
  run: async (req, res, client) => {
    const random = eightball[Math.floor(Math.random() * eightball.length)]
    res.json({
      answer: random
    })
  }
}