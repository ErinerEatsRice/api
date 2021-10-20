module.exports = {
    name: 'eval',
    aliases: ['ev'],
    category: 'developer',
    run: async (client, message, args) => {
        if (!message.author.id.toString().includes('827809019334099004')) return;
        let { inspect } = require('util')
        let code = args.join(' ')
       try{
        const result = await eval(code)
        let output = result
        if (typeof result !== 'string'){
            output = inspect(result)
        }
        if (output.length > 4000) return message.reply({
            content: `Unable to send output because it has ${output.length} characters.`
        })
        message.reply({
            content: `\`\`\`js
${output}\`\`\``
        })
       } catch (err) {
           message.reply({
               content: `\`\`\`js
${err}\`\`\``
           })
       }
    }
} 
