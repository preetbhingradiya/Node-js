const mongoose=require('mongoose')

const blogschema=new mongoose.Schema({
    title:String,
    contect:String,
    img:String,
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"customer",
        required:true
    }
})

const blog=mongoose.model("blog",blogschema)

module.exports=blog