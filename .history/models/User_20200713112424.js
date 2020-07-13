let User = function (data) {
    this.data = data
    this.errors = []

}
User.prototype.validate = function () {
    if (this.data.username == '') { this.errors.push('You must Provide a username.') }
    if (this.data.email == '') { this.errors.push('You must Provide a valid e-mail address.') }
    if (this.data.password == '') { this.errors.push('You must Provide a valid e-mail password.') }
    if (this.data.password.length > 0 && this.data.password.length < 8) { this.errors.push('Password has to be at least 8 characrters long') }
    if (this.data.password.length > 100) { this.errors.push('Password cannot exceed 100 characters') }
    if (this.data.username.length > 0) { this.errors.push('Username cannot be empty) }
    if (this.data.username.length > 30) { this.errors.push('Username cannot exceed 30 characters.') }

}


User.prototype.register = function () {
    //Step #1: Validate user data
    this.validate()
    //Step #2: Only if there are no validation errors then save the user data into a database
}

module.exports = User