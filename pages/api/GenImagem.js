const {Configuration, OpenAIApi} = require('openai')
const configuration = new Configuration({
    apiKey: process.env.ApiKey
})
const openai = new OpenAIApi(configuration)

export default function GenImagem(req, res) {
    if(req.body) {
        requestApi(req.body.prompt).then((response) => {
            res.send(response)
        })
    } else {
        res.send(404)
    }
}

async function requestApi(prompt) {
    try {
        const response = await openai.createImage({
            prompt: prompt,
            n:1,
            size:"1024x1024"
        })
    
        return response.data.data[0].url
    } catch (e) {
        if(e.response) {
            return e.response.data
        } else {
            console.log(e.message)
        }
    }   
}