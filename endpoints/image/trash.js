const jimp = require("jimp")

module.exports = {
  name: "image/trash",
  run: async(req, res) => {
    const av = req.query.avatar
    if (!av) return res.json({
      error: 'Field image/trash?avatar= is required.'
    })
  let bg = await jimp.read(`${process.cwd()}/trash.png`);
        imag = await jimp.read(av);
        imag.resize(309, 309);
        bg.composite(imag, 307, 0);
        let raw;
        bg.getBuffer(`image/png`, (err, buffer) => {
            raw = buffer;
        });
       res.set({'Content-Type':'image/png'})
       res.send(raw)
  }
}