const http = require('http')
const url = require('url')

const server = http.createServer((req, res) => {
    const response = url.parse(req.url, true)
    console.log(response)
    res.end('hello world')
})

server.listen(3000, () => {
    console.log('server is running at http://localhost:3000')
})