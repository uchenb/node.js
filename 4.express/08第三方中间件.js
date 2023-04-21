const express = require('express')

const app = express()
const parser = require('body-parser')

app.use(parser.json())
app.use(express.urlencoded({ extended: false }))

app.post('/', (req, res) => {
    res.send('Hello World!')
})
app.listen('localhost', () => {
    console.log('listening on')
})