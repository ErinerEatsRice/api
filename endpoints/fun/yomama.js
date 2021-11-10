module.exports = {
  name: 'fun/yomamajoke',
  run: async (req, res) => {
    const mama = require('yourmama')
    const x = await mama.getRandom()
    res.json({
      joke: x
    })
  }
}