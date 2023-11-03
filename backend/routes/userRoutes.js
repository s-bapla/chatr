const express = require('express');
const router = express.Router()
const {signupUser, authenticateUser} = require('../controllers/userController')

router.post('/', signupUser)
// router.post('/login', authenticateUser)

module.exports = router
