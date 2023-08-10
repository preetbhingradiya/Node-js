const express=require('express')
const { showTemplet, register } = require('../controllers/register-logic')

const route=express()

route.get('/register/templet',showTemplet)
route.post('/register',register)

module.exports=route