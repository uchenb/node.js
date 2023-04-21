const express = require('express')

const app = express()

app.use('/public', express.static('../clock'))

app.listen(80, () => {
    console.log('server is running at http://localhost')
})
