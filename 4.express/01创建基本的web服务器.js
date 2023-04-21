
const express = require('express');

const app = express();

app.get('/user', (req, res) => {
    res.send({ name: 'zs', age: 22, gender: '男' })
})

app.post('/user', (req, res) => {
    res.send('请求成功')
})

app.get('/', (req, res) => {
    console.log(req.query)
    res.send(req.query)
})

app.listen(80, () => {
    console.log('server is running')
})