const express=require('express')
const {home, login, remove, update, find, sendImage, deleteImage,} = require('../controllers/user.control')
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
server.patch("/image/:id",uplode.single("image"),sendImage)
server.delete("/image/delete/:id",uplode.single("image"),deleteImage)

module.exports=server

