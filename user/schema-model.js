const mongoose=require('mongoose')

const schema=new mongoose.Schema({
    name: String,
    gender: String,
    shirt_size: String,
    language: String
})

const customer=mongoose.model("customer",schema)

module.exports=customer