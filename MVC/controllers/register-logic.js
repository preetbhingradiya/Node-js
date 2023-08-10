
const showTemplet=(req,res)=>{
    res.render('register')
}

const register=(req,res)=>{
    res.cookie("token",req.body.name)
    res.render('home')
}

module.exports={showTemplet,register}