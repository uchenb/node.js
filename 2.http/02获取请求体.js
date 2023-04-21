const http = require('http')

const server = http.createServer((req, res) => {
    let body = ''
    req.on('data', (chunk) => {
        body += chunk
    })
    req.on('end', () => {
        console.log(body)
    })
    res.end('hello')
})

server.listen(3000, () => {
    console.log('server is running at http://localhost:3000')
})