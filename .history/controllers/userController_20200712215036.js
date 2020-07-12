exports.login = () => {

}
exports.logout = () => {

}
exports.register = (rq, res) => {
    console.log(req.body)
    res.send('thanks for trying to reg.')
}
exports.home = (req, res) => {
    res.render('home-guest')
}