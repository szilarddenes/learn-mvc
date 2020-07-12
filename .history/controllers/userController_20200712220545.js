const User = require('../models/User')

exports.login = () => {

}
exports.logout = () => {

}
exports.register = (req, res) => {
    let user = new User()
    user.homePlanet
    res.send('thanks for trying to reg.')
}
exports.home = (req, res) => {
    res.render('home-guest')
}