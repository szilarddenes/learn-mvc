
exports.login = () => {

}
exports.logout = () => {

}
exports.register = (req, res) => {
    console.log(req.body)
    res.send('thanks for trying to reg.')
}
exports.home = (req, res) => {
    res.render('home-guest')
}