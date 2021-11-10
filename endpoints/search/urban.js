const urban = require('relevant-urban')
module.exports = {
  name: 'search/urban',
  run: async (req, res) => {
    const w = req.query.word
    if (!w) return res.json({
      error: 'Field search/urban?word= is required.'
    })
    let x = await urban(w)
    .catch(() => null)
    if (!x) x = res.json(null)
      let word = x.word
    let definition = x.definition
    let example = x.example
    let url = x.urbanURL
    let author = x.author
    let thumbsUp = x.thumbsUp
    let thumbsDown = x.thumbsDown
    let tags = x.tags
    let sounds = x.sounds
    res.json({
      word: word,
      definition: definition,
      example: example,
      url: url,
      author: author,
      thumbsUp: thumbsUp,
      thumbsDown: thumbsDown
   })
  }
}