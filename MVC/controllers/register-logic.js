
const showTemplet=(req,res)=>{
    const {token}=req.cookies

    if(token){
        res.render('home')
    }
    else{
        res.render('register')
    }
}

const register=(req,res)=>{
    res.cookie("token",req.body.name,{maxAge:60*1000})
    res.render('home')
}

module.exports={showTemplet,register}