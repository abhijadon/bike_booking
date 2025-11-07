const express = require('express')
const UserController = require('../controllers/User_Controller')
const router = express.Router()


//Roles routes api
router.post('/user/create', UserController.create)
//Roles routes api

module.exports = { router } 