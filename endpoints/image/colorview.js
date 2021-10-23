module.exports = {
  name: "image/color/view",
  run: async(req, res, client) => {
    const hex = req.query.hex
    if (!hex) return res.json({
      error: 'Field image/color/view?hex= is required.'
    })
  const { Canvas } = require('canvas-constructor')
   const image = new Canvas(500, 500)
   .setColor('#' + hex)
   .printRectangle(0, 0, 500, 500)
   .toBuffer()
    res.set({'Content-Type': 'image/png'})
    res.send(image)
    }
} 
