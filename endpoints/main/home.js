const db = require('quick.db')
module.exports = {
  name: '',
  path: 'main',
  run: async (req, res, client) => {
    res.send(`
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Eriner API</title>
    <meta content="eriner.api" property="og:title" />
    <meta content="Drop Testisause api, get Eriner api." property="og:description" />
    <meta content="https://api.eriner.repl.co/home"property="og:url" />
    <meta content="https://cdn.discordapp.com/avatars/892065748539809802/4cbccd33820c82c589951e02ed43b149.webp 
" property="og:image" />
    <meta content="#303236" data-react-helmet="true" name="theme-color" />
<style>
.title {
   text-align: center;
   font-family: monospace;
   font-size: 40px;
   color: white;
}
body {
   background-color: #1c2232;
}
p {
  font-family: monospace;
  color: #59ad13;
  font-size: 20px;
  text-align: center;
}
h3 {
  font-family: monospace;
  color: white;
  font-size: 25px;
  text-align: center;
}
</style>
</head>
<body>
 <h1 class="title">Eriner API</h1>
  <h3>Fun</h3>
<p><span style="color:white;">GET/</span>${client.endpoints.filter(x => x.name.startsWith('fun')).map(e => e.name).join('<br><span style="color:white;">GET/</span>')}
 <h3>Image</h3>
<p><span style="color:white;">GET/</span>${client.endpoints.filter(x => x.name.startsWith('image')).map(e => e.name).join('<br><span style="color:white;">GET/</span>')}
 <h3>Search</h3>
<p><span style="color:white;">GET/</span>${client.endpoints.filter(x => x.name.startsWith('search')).map(e => e.name).join('<br><span style="color:white;">GET/</span>')}
 <h3>Info</h3>
<p><span style="color:white;">GET/</span>${client.endpoints.filter(x => x.name.startsWith('info')).map(e => e.name).join('<br><span style="color:white;">GET/</span>')}
</body>
`)
  }
}