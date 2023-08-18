const express=require('express')
const { showTemplet, register, showLogin} = require('../controllers/register-logic')
const passport = require('passport')

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


module.exports=route