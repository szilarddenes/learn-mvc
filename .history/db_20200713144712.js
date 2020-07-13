const mongodb = require('mongodb')
const dotenv = req
mongodb.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
    module.exports = client.db()
    console.log('[*] database is running.congrats.')
    const app = require('./app')
    app.listen(3000)
})