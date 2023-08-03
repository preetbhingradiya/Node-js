const express=require('express')
const {home, login, remove, update, find, sendImage,} = require('../controllers/user.control')
const check = require('../middleware/check')
const server=express()
const multer=require("multer")

const storage=multer.diskStorage({
    destination:"images",
    filename:(req,file,cb)=>{
        cb(null,file.originalname)
    }
})

const uplode=multer({
    storage:storage,
})



server.get('/',home)
server.get('/datashow',find)
server.post('/login',check, login)
server.delete('/delete/:id',remove)
server.patch('/update/:id',update)
server.post("/image",uplode.single("image"),sendImage)

module.exports=server

