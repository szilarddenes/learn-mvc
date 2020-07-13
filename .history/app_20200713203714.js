const express = require('express')
const session =require('express-session')
const app = express()

let sessionOptions=session({
    secret:
})

const router = require('./router')

app.use(express.urlencoded({ extended: false }))
app.use(express.json())


app.set('views', 'views')
app.set('view engine', 'ejs')

app.use(express.static('public'))

console.log('[#] nodemon watch is running.congrats.')

app.use('/', router)

module.exports = app