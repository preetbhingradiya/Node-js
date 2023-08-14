const customer = require("../models/register-model")

const showTemplet=(req,res)=>{
    const {token}=req.cookies

    if(token){
        res.render('home')
    }
    else{
        res.render('register')
    }
}

const register=async(req,res)=>{

    const {email}=req.body

    const mach=await customer.findOne({email})

    if(mach){
        res.send("User is Alredy Register")
    }
    else{
        await customer.create(req.body)
    
        res.cookie("token",req.body.name,{maxAge:60*1000})
        res.render('home')
    }

}

module.exports={showTemplet,register}