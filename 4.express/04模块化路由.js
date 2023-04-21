const express = require('express')

const app = express()

const router = require('./05router')

app.use('/api',router)

app.listen('localhost', () => {
    console.log('listening on')
})
