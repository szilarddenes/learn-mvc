const express = require('express')
const app = express()

app.set('views','views')
app.set('view engine')

app.get('/', (req, res) => {
    res.send('welcome to our site')
})

app.listen(3000)