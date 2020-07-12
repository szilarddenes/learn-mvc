let User = function (data) {
    this.data = data
    this.errors = []

}
User.prototype.validate = function () {
    if (this.data.username == '') { this.errors.push('You must Provide a username.') }
    if (this.data.email == '') { this.errors.push('You must Provide a valid e-mail address.') }
    if (this.data.password == '') { this.errors.push('You must Provide a valid e-mail password.') }

}


User.prototype.register = function () {
    //Step #1: Validate user data
    this.validate()
    //Step #2: Only if there are no validation errors then save the user data into a database
}

module.exports = User