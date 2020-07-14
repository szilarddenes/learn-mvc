const User = require('../models/User')

exports.mustBeLoggedIn = function(req, res, next)

exports.login = (req, res) => {
  let user = new User(req.body)
  user
    .login()
    .then((result) => {
      req.session.user = { avatar: user.avatar, username: user.data.username }
      req.session.save(function () {
        res.redirect('/')
      })
    })
    .catch(function (e) {
      req.flash('errors', e)
      req.session.save(function () {
        res.redirect('/')
      })
    })
}

exports.logout = (req, res) => {
  req.session.destroy(function () {
    res.redirect('/')
  })
}

exports.register = (req, res) => {
  let user = new User(req.body)
  user
    .register()
    .then(() => {
      req.session.user = { avatar: user.avatar, username: user.data.username }
      req.session.save(function () {
        res.redirect('/')
      })
    })
    .catch((regErrors) => {
      regErrors.forEach(function (error) {
        req.flash('regErrors', error)
      })
      req.session.save(function () {
        res.redirect('/')
      })
    })
}
exports.home = (req, res) => {
  if (req.session.user) {
    res.render('home-dashboard', {
      username: req.session.user.username,
      avatar: req.session.user.avatar,
    })
  } else {
    res.render('home-guest', {
      errors: req.flash('errors'),
      regErrors: req.flash('regErrors'),
    })
  }
}
