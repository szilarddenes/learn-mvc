const User = require('../models/User')

exports.login = (req, res) => {
  let user = new User(req.body)
  user
    .login()
    .then((result) => {
      req.session.user = { username: user.data.username }
      req.session.save(function () {
        res.redirect('/')
      })
    })
    .catch((e) => {
      req.flash('errors', e)
      res.redirect('/')
    })
}

exports.logout = (req, res) => {
  req.session.destroy(function () {
    res.redirect('/')
  })
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
    res.render('home-dashboard', { username: req.session.user.username })
  } else {
    res.render('home-guest')
  }
}
