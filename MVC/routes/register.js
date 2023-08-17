const express=require('express')
const { showTemplet, register, showLogin, login } = require('../controllers/register-logic')
const passport = require('passport')

const route=express()

route.get('/register/templet',showTemplet)
route.post('/register',register)
route.get('/login/templet',showLogin)
route.post('/login/templet',passport.authenticate('local', { failureRedirect: "/login/templet",successRedirect:'/'}))


module.exports=route