const express = require('express')
const app = express()

app.set('')

app.get('/', (req, res) => {
    res.send('welcome to our site')
})

app.listen(3000)