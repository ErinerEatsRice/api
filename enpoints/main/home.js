const db = require('quick.db')
module.exports = {
  name: 'home',
  path: 'main',
  run: async (req, res) => {
    res.send(`
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style>
.title {
   text-align: center;
   font-family: monospace;
   font-size: 20px;
   color: #ffffff;
}
body {
   background-color: #0074D9;
}
</style>
</head>
<body>
 <h1 class="title">Eriner API</h1>
</body>
`)
  }
}