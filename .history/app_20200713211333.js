const express = require('express')
const session = require('express-session')
const MongoStore =require()
const app = express()

let sessionOptions = session({
  secret: 'javascript is sooo cool',
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 1000 * 60 * 60 * 24, httpOnly: true },
})

app.use(sessionOptions)

const router = require('./router')

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.set('views', 'views')
app.set('view engine', 'ejs')

app.use(express.static('public'))

console.log('[#] nodemon watch is running.congrats.')

app.use('/', router)

module.exports = app
