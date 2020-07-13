const User = require('../models/User')

exports.login = (req, res) => {

}
exports.logout = () => {

}
exports.register = (req, res) => {
    let user = new User(req.body)
    user.register()
    if (user.errors.length) {
        res.send(user.errors)
    } else {
        res.send('congrats, no errors.')
    }

}
exports.home = (req, res) => {
    res.render('home-guest')
}