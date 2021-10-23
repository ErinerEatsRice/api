const got = require('got')
module.exports = {
  name: 'fun/uselessfact',
  category: 'fun',
  run: async (req, res, client) => {
    const x = await got('https://uselessfacts.jsph.pl/random.json?language=en')
    const content = JSON.parse(x.body)
    res.json({
      fact: content.text
    })
  }
}