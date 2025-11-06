const express = require('express')
const RolesController = require('../controllers/Role_Controller')

const router = express.Router()


//Roles routes api
router.post('/roles/create', RolesController.create)


module.exports = { router } 