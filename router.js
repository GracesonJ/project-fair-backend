//  import express
const express = require('express')

// import user controller
const userController = require('./controllers/userController')

//instance router
const router = new express.Router()

// REGISTER
router.post('/register',userController.register)

//LOGIN

module.exports = router