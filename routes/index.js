const express = require('express')
const UserController = require('../controllers/User_Controller')
const router = express.Router()


//Roles routes api
router.post('/user/create', UserController.create)
router.put('/user/update/:id', UserController.update)
//Roles routes api

module.exports = { router } 