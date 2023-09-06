const trasport = require("../confing/maile")
const customer = require("../models/register-model")

const showTemplet=(req,res)=>{
    const {token}=req.cookies

    if(token){
        res.render("home")
    }
    else{
        res.render("register")
    }
}

const register=async(req,res)=>{    

    const {username}=req.body

    const mach=await customer.findOne({username})

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
    const {username,password}=req.body

    const mach=await customer.findOne({username})

    if(!mach) return res.redirect('/register/templet')

    if(mach.password!==password) return res.render('login',{username})

}

const password=(req,res)=>{
    res.render("password")
}

const changePassword=async(req,res)=>{

    let user=await customer.findById(req.user.id)
    
    if(user.password!==req.body.oldPassword) return res.json({message:"inccorect password"})

    if(req.body.newPassword !== req.body.confirmPassword) return res.json({message:"password is does not match"})

    user.password=req.body.newPassword

    await user.save()

    res.status(200).json({
        success:true,
        user
    })
}

const OTP=Math.floor(Math.random()*1000000)

const sendEmail=async(req,res)=>{
    const mailOptons={
        from:process.env.EMAIL,
        to:"preetbhingradiya6@gmail.com",
        subject:"verify Account ??",
        html:`<a href="localhost:/7070/email/verify/${OTP}">${OTP}</a>`
    }

    trasport.sendMail(mailOptons,(err,Info)=>{
        if(err) return console.log(err);

        res.send(Info)
    })
}

const verifyOtp=async(req,res)=>{
    if(req.params.otp !== OTP.toString()) return res.json({success:false,message:"OTP dones not match"})

    res.json({success:true,message:"Account is verify"})
}


module.exports={showTemplet,register,showLogin,login,password,changePassword,sendEmail,verifyOtp}