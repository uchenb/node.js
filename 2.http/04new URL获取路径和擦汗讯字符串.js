const http = require('http')

const server = http.createServer((req, res) => {
    const url = new URL(req.url, 'http://localhost:3000')
    console.log(url)
    console.log(url.pathname)
    console.log(url.searchParams.get('name'))
    console.log(url.searchParams.get('age'))
    res.end('Welcome')
})

server.listen(3000, () => {
    console.log('server is running at http://localhost:3000')
})