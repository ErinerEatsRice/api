**Main File**
```
const express = require('express')
const app = express()
app.get('/', (req, res) => {
   res.send('Hello World')
})
const handler = require('./handler/route.js')
handler(app)
app.listen(6969, () => console.log('API is up'))
app.set('json spaces', 2)
```
**../../enpoints/fun/joke.js**
```
module.exports = {
   name: 'fun/joke',
   run: async (req, res) => {
      res.json({
         joke: 'haha open source api'
      })
   }
}
```