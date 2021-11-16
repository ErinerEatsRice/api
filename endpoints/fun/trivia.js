const url = process.env.trivia_api
const axios = require('axios')
module.exports = {
    name: 'fun/trivia',
    run: async (req, res) => {
let as = []
       function shuffle(array) {
           for (let s = array.length - 1; s > 0; s--){
          const m = Math.floor(Math.random() * (s + 1))
          const temp = array[s]
          array[s] = array[m]
          array[m] = temp
        }
           return array
       }
        function up(word) {
            const res = word
            .split(" ")
            .map(s => 
                s.toLowerCase()
                 .replace(s.toLowerCase()[0], s[0].toUpperCase())
                ).join(" ")
            return res
        }
        const x = await axios.get(url)
        as.push(x.data.results[0])
        as[0].incorrect_answers.push( as[0].correct_answer)
        const a = shuffle(as[0].incorrect_answers)
       res.json({
           category: x.data.results[0].category,
           difficulty: up(x.data.results[0].difficulty),
           question: x.data.results[0].question,
           correct_answer: x.data.results[0].correct_answer,
           answers: a
       })
    }
}