const express=require('express')
const {home, login, remove, update, find,} = require('../controllers/user.control')
const check = require('../middleware/check')
const server=express()


server.get('/',home)
server.get('/datashow',find)
server.post('/login', login)
server.delete('/delete/:id',remove)
server.patch('/update/:id',update)

module.exports=server

