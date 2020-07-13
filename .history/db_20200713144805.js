const mongodb = require('mongodb')
const dotenv = require('dotenv')
dotenv.config()
mongodb.connect(process.env.CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
    module.exports = client.db()
    console.log('[*] database is running.congrats.')
    const app = require('./app')
    app.listen(3000)
})