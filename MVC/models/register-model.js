const mongoose=require('mongoose')

const userschema=new mongoose.Schema({
    name:String,
    username:String,
    password:String,
})

const customer=mongoose.model("customer",userschema)

module.exports=customer