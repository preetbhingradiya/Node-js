const express=require('express')
const {home, login, remove, update,} = require('../controllers/user.control')
const server=express()

server.get('/',home)
server.post('/login', login)
server.delete('/delete/:id',remove)
server.patch('/update/:id',update)

module.exports=server

