const mongoose=require('mongoose')

const connect=async()=>{
    await mongoose.connect("mongodb+srv://preetbhingradiya6:node-js@cluster0.mbc0t62.mongodb.net/?retryWrites=true&w=majority")

    console.log("data is connect");
}

module.exports=connect