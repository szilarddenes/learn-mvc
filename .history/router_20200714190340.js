//javascript files communicating with each other
const express = require('express')
const router = express.Router()
const userController = require('./controllers/userController')

router.get('/', userController.home)
router.post('/register', userController.register)
module.exports = router
router.post('/login', userController.login)
router.post('/logout', userController.logout)

//post related routs
router.get('create-post',)
