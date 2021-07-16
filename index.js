const express = require("express"),
    app = express(),
    config = require("./config.json"),
    utils = require("./utils")

app.use(express.static('public'));
app.get('/', (req, res) => {
    return res.json({
        message: "Welcome to Melen API !"
    })
})

app.get('/hug', (req, res) => {
    if(config.hug.length === 0){
        return res.json({
            "message": "No image found !"
        })
    }
    return res.json({
        "image": `${config.url}/hug/${config.hug[utils.between(0, config.hug.length)]}`
    })
})

app.get('*', (req, res) => {
    return res.json({
        "message": "route not found"
    })
})

app.listen(config.port, () => {
    console.log(`Server started on port ${config.port}`)
})
