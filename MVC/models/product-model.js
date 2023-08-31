const mongoose=require('mongoose')

const productschema=new mongoose.Schema({
    title:String,
    url:String,
    price:String,
})

const product=mongoose.model("Userproduct",productschema)

module.exports=product