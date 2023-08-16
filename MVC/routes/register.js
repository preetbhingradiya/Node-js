const express=require('express')
const { showTemplet, register, showLogin, login } = require('../controllers/register-logic')

const route=express()

route.get('/register/templet',showTemplet)
route.post('/register',register)
route.get('/login/templet',showLogin)
route.post('/login/templet',login)


module.exports=route