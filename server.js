const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const req = require('express/lib/request')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.listen('8000', () => {
    console.log("Servidor2 rodando na porta 8000")
})

app.get('/', (req, res) => {
    res.json({ "message": "hello World" })
})

app.post('/post', (req, res) => {
    const { name, email, password, age } = req.body

    if (!name || !email || !password || !age) {
        return res.json({ "error": "empty fields" })
    }
    res.json({ "ok": true })
})