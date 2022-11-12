const express = require('express')
const router = express.Router()
const userController = require('../controller/userController')
const validator = require('../middleware/validator/userValidator')
const {verifyToken} = require('../util/jwt')
const multer = require('multer')
const upload = multer({dest: 'public/images'})

router
  .post('/register', validator.register, userController.userRegister)
  .post('/login', validator.login, userController.userLogin)
  .get('/list', verifyToken, userController.userList)
  .put('/update', verifyToken, validator.update, userController.userinfoUpdate)
  .post('/upload', verifyToken, upload.single('avatar'), userController.userAvatar)
  .delete('/:id', userController.userInfoDelete)

module.exports = router