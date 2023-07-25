const mongoose=require('mongoose')
require("dotenv").config();


const connect=async()=>{
    await mongoose.connect(process.env.url)

    console.log("data base connect");
}

module.exports=connect