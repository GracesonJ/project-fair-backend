//  import express
const express = require('express')

// import user controller
const userController = require('./controllers/userController')

// add controller
const projectController = require('./controllers/projectController')

//import jwtMiddleware
const jwtMiddleware = require('./middleware/jwtMiddleware')

//import multer
const multerConfig = require("./middleware/multerMiddleware")
//instance router
const router = new express.Router()

// REGISTER
router.post('/register',userController.register)

//LOGIN
router.post('/login',userController.login)

//add-project
router.post('/add-project', jwtMiddleware, multerConfig.single("projectImage"), projectController.addProjectController)

//get all project
router.get('/all-project',jwtMiddleware, projectController.getAllProjectController)

// get home projects
router.get('/home-projects', projectController.getHomeProjectController)

//get user Project
router.get('/user-project', jwtMiddleware, projectController.getUserProjectController)

//remover user project
router.delete('/remove-userproject/:id', jwtMiddleware, projectController.removeUserProjectController)
 
//update user project
router.put(`/update-userProject/:id`, jwtMiddleware, multerConfig.single("projectImage"), projectController.editProjectController)


module.exports = router