const express=require('express')
const {home, login} = require('../controllers/user.control')

const server=express()

server.get('/',home)
server.post('/login',login)

module.exports=server

