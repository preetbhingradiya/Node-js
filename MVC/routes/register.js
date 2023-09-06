const express=require('express')
const { showTemplet, register, showLogin, password, changePassword, sendEmail, verifyOtp} = require('../controllers/register-logic')
const passport = require('passport')
const isAutherize = require('../middleware/Autherize')

const route=express()

route.get('/register/templet',showTemplet)
route.post('/register',register)
route.get('/login/templet',showLogin)
route.post('/login/templet',passport.
authenticate('local', { failureRedirect: "/login/templet",successRedirect:'/'}))

// Google Authentcate
route.get('/auth/google',passport.authenticate('google', { scope: ['profile'] }));

route.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/');
});

//change password
route.get('/password',isAutherize,password)
route.patch("/changpassword",changePassword)

//Email 
route.get('/email',sendEmail)
route.get("/verify/:otp",verifyOtp)

module.exports=route