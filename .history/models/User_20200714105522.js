const usersCollection = require('../db').db().collection('users')
const validator = require('validator')
const bcrypt = require('bcryptjs')
let User = function (data) {
  this.data = data
  this.errors = []
}

User.prototype.cleanUp = function () {
  if (typeof this.data.username != 'string') {
    this.data.username = ''
  }
  if (typeof this.data.email != 'string') {
    this.data.email = ''
  }
  if (typeof this.data.password != 'string') {
    this.data.password = ''
  }
  //get rid of bogus properties
  this.data = {
    username: this.data.username.trim().toLowerCase(),
    email: this.data.email.trim().toLowerCase(),
    password: this.data.password,
  }
}

User.prototype.validate = function

User.prototype.login = function () {
  return new Promise((resolve, reject) => {
    this.cleanUp()
    usersCollection
      .findOne({ username: this.data.username })
      .then((attemptedUser) => {
        if (
          attemptedUser &&
          bcrypt.compareSync(this.data.password, attemptedUser.password)
        ) {
          resolve('congrats')
        } else {
          reject('Invalid username/ password.')
        }
      })
      .catch(() => {
        reject('Please try again later, server error.')
      })
  })
}

User.prototype.register = function () {
  //Step #1: Validate user data
  this.cleanUp()
  this.validate()
  //Step #2: Only if there are no validation errors then save the user data into a database
  if (!this.errors.length) {
    //hash user password
    let salt = bcrypt.genSaltSync(10)
    this.data.password = bcrypt.hashSync(this.data.password, salt)
    usersCollection.insertOne(this.data)
  }
}

module.exports = User
