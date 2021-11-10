const ram = (process.memoryUsage().rss / 1024 / 1024).toFixed(2)
const ms = require('pretty-ms')
module.exports = {
  name: 'info/stats',
  run: async (req, res, client) => {
    let total = client.db.get('total')
     if (!total) total = 0
      res.json({
      ram: ram,
      uptime: ms(client.uptime, { verbose: true }),
      requests: total
    })
  }
}