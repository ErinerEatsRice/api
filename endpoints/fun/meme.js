const got = require('got')
module.exports = {
  name: 'fun/meme',
  run: async (req, res) => {
    const sub = [
      'dankmemes',
      'memes',
      'BlackPeopleTwitter',
      'MemeEconomy',
      'ComedyCemetry'
    ]
    const r = sub[Math.floor(Math.random() * sub.length)]
    const response = await got(`https://www.reddit.com/r/${r}/random/.json`)       
        let content = JSON.parse(response.body);
        let permalink = content[0].data.children[0].data.permalink;
        let author = content[0].data.children[0].data.author_fullname
        let memeUrl = `https://reddit.com${permalink}`;
        let memeImage = content[0].data.children[0].data.url;
        let memeTitle = content[0].data.children[0].data.title;
        let memeUpvotes = content[0].data.children[0].data.ups;
        let memeDownvotes = content[0].data.children[0].data.downs;
        let memeNumComments = content[0].data.children[0].data.num_comments;
       res.json({
         url: memeUrl,
         author: author,
         title: memeTitle,
         image: memeImage,
         upvotes: memeUpvotes,
         downvotes: memeDownvotes,
         comments: memeNumComments,
         subreddit: r.toString()
    })
  }
}