const check=(req,res,next)=>{

    let {name,email,password}=req.body

    if(name&& email&& password){
        next()
    }
    else{
        res.send("Invalid detailes !")
    }
}

module.exports=check