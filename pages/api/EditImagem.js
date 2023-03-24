const {Configuration, OpenAIApi} = require('openai')
const configuration = new Configuration({
    apiKey: process.env.ApiKey
})
const openai = new OpenAIApi(configuration)


export default async function EditImagem(req, res) {
    requestApi(req.body.prompt).then((response) => {
        res.send(response)
    })
    
}

async function requestApi() {
    try {
    } catch(e) {
        console.error(e.message)
    }
}