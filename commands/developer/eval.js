module.exports = {
    name: 'eval',
    aliases: ['ev'],
    category: 'developer',
    run: async (client, message, args) => {
        if (!client.config.User.DevID.includes(message.author.id)) return;
        let { inspect } = require('util')
        let code = args.join(' ')
       if (code.includes('client.token')) return message.channel.send('no')
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
