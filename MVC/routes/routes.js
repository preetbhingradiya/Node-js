const express=require('express')
const {home, login, remove, update,} = require('../controllers/user.control')
const check = require('../middleware/check')
const server=express()

server.get('/',home)
server.post('/login', check,login)
server.delete('/delete/:id',remove)
server.patch('/update/:id',update)

module.exports=server

