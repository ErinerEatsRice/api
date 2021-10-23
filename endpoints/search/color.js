const fetch = require('node-fetch')
module.exports = {
  name: "search/color",
  run: async(req, res) => {
    const hex = req.query.hex
    const r = await fetch("http://www.thecolorapi.com/id?hex=" + hex)
    const rr = await r.json()
    const image = "https://api.eriner.repl.co/image/color/view?hex=" + hex
    if (!hex) return res.json({
      error: 'Field search/color?hex= is required.'
    })
    else {
      res.json({
        rgb: rr.rgb.value,
        hex: rr.hex.value,
        name: rr.name.value,
        clean: rr.hex.clean,
        image: image
      })
    }
   }
} 
