const db = require('quick.db')
module.exports = {
  name: 'home',
  run: async (req, res) => {
    res.send(`
<body>
 <h2 style="text-align:center;"> In development</h2>
</body>
`)
  }
}