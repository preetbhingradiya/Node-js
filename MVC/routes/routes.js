const express=require('express')
const {home, login, remove, update, find, sendImage, deleteImage,} = require('../controllers/user.control')
const check = require('../middleware/check')
const server=express()
const multer=require("multer")
const auth = require('../middleware/Authentic')


const storage=multer.diskStorage({
    destination:"images",
    filename:(req,file,cb)=>{
        cb(null,Date.now()+file.originalname)
    }
})


const uplode=multer({
    storage:storage,
})


server.get('/',auth,home)
server.get('/datashow',find)
server.post('/login',check, login)
server.delete('/delete/:id',remove)
server.patch('/update/:id',update)
// image
server.patch("/image/:id",uplode.array("image"),sendImage)
server.patch("/image/delete/:id",deleteImage)

module.exports=server

