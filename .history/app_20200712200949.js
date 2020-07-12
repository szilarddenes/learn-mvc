const express = require('express')
const app = express()

app.set('views', 'views')
app.set('view engine', 'ejs')
app.use(express.static())

app.get('/', (req, res) => {
    res.render('home-guest')
})

app.listen(3000)