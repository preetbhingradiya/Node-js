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
    
        res.cookie("token",req.body.name,{maxAge:15*60*1000})
        res.render('home')
    }

}

const showLogin=(req,res)=>{
    res.render('login')
}

const login=async(req,res)=>{
    const {email,password}=req.body

    const mach=await customer.findOne({email})

    if(!mach) return res.redirect('/register/templet')

        

    if(mach.password!==password)  return res.render('login',{email})

    res.render('home')
}

module.exports={showTemplet,register,showLogin,login}