const mongoose=require('mongoose')

const userschem=mongoose.Schema({
    name:{type:String,required:true},
    password: String
})

let user=mongoose.model("User",userschem)

module.exports=user