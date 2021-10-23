const Canvas = require(`canvas`);
module.exports = {
  name: "image/jail",
  run: async(req, res) => {
    const av = req.query.avatar
    if (!av) return res.json({
      error: 'Field /image/jail?avatar= is required.'
    })
    let bg = await Canvas.loadImage(`./jail.png`);
        let img = await Canvas.loadImage(image);
        const canvas = Canvas.createCanvas(400, 400);
        const ctx = canvas.getContext(`2d`);
        ctx.drawImage(img, 0, 0, 400, 400);
        ctx.drawImage(bg, 0, 0, 400, 400);
        res.set({'Content-Type':'image/png'})
        res.send(canvas.toBuffer())
  } 
}