const db = require('quick.db')
const ram = (process.memoryUsage().rss / 1024 / 1024).toFixed(2)
module.exports = {
  name: 'info/stats',
  run: async (req, res) => {
    let total = db.get('total')
     if (total === null) total = 0
      res.json({
      ram: ram,
      requests: total
    })
    db.add('total', 1)
  }
}