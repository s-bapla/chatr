const express = require('express');
const router = express.Router()
const {signupUser, authenticateUser, getUsers} = require('../controllers/userController')

router.post('/', signupUser)
router.post('/login', authenticateUser)
router.get('/', getUsers);

module.exports = router
