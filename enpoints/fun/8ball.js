const eightball = require('/home/runner/api/assets/fun/8ball.json')
module.exports = {
  name: 'fun/8ball',
  run: async (req, res, client) => {
    const keyV = client.db.get('key.value')
    const key = req.query.key
    if (!key || !key.includes(keyV)) return res.json({
      answer: 'Denied access, no key or invalid key provided.'
    })
    const random = eightball[Math.floor(Math.random() * eightball.length)]
    res.json({
      answer: random
    })
    client.db.add('total', 1)
  }
}