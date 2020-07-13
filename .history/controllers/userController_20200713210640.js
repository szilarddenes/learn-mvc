const User = require('../models/User')

exports.login = (req, res) => {
    let user = new User(req.body)
    user.login().then((result) => {
        req.session.user = {username:user.data.username}
      res.send(result)
    }).catch((err) => {
      res.send(err)
    })
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
    if (req.session.user) {
res.send('welcome to the actual application!!')
    }else{
        res.render('home-guest')
    }
}