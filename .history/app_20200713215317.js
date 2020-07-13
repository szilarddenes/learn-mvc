const express = require('express')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session) //referencing the express session package
const flash = require('connect-flash')
const app = express()

let sessionOptions = session({
  secret: 'javascript is sooo cool',
  store: new MongoStore({ client: require('./db') }),
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 1000 * 60 * 60 * 24, httpOnly: true },
})

app.use(sessionOptions)
app.use()

const router = require('./router')

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.set('views', 'views')
app.set('view engine', 'ejs')

app.use(express.static('public'))

console.log('[#] nodemon watch is running.congrats.')

app.use('/', router)

module.exports = app
