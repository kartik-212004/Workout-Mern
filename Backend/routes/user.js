const express = require('express')
const Router = express.Router()
const { loginuser, signupuser } = require('../controllers/usercontroller')

// login 
Router.post('/login', loginuser)

// signup
Router.post('/signup', signupuser)

module.exports = Router;

