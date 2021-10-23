const Canvas = require("canvas")
module.exports = {
  name: "image/gay",
  run: async(req, res) => {
    const av = req.query.avatar
    if (!av) return res.json({
      error: 'Field /image/gay?avatar= is required.'
    })
        let bg = await Canvas.loadImage(`./gay.png`);
        let img = await Canvas.loadImage(av);
        const canvas = Canvas.createCanvas(480, 480);
        const ctx = canvas.getContext(`2d`);
        ctx.drawImage(img, 0, 0, 480, 480);
        ctx.drawImage(bg, 0, 0, 480, 480);
        res.set({'Content-Type': 'image/png'})
        res.send(canvas.toBuffer())
  }
}