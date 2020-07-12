//javascript files communicating with each other
const express = require('express')
const router = express.Router()
const userController = require('./controllers/userController')

router.get('/', userController.home)
router.post('/register',u)
module.exports = router
