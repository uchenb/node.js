const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended:false}));

app.post('/api/', function (req, res) {
    console.log('req.body')
    res.send('123')
});
app.listen('localhost', () => {
    console.log('listening on')
});