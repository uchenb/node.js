const express = require('express');
const app = express();

const mw = function (req, res, next) {
    console.log('123');
    next();
}

app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.listen('localhost', () => {
    console.log('listening on')
});