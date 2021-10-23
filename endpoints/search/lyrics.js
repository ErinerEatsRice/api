const got = require('got')
module.exports = {
  name: 'search/lyrics',
  run: async (req, res) => {
    const que = req.query.title
      if (!que) return res.json({
      error: 'Field search/lyrics?title= is required.'
    })
    got(`https://some-random-api.ml/lyrics?title=${que}`).then(response => {
       let content = JSON.parse(response.body)
       res.json({
         title: content.title,
         author: content.author,
         lyrics: content.lyrics,
         thumbnail: content.thumbnail.genius
       })
    })
  }
}