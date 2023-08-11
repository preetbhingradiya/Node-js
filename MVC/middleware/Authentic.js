const auth=(req,res,next)=>{

    const {token}=req.cookies

    if(token){
        next()
    }
    else{
        res.render('register')
    }

}

module.exports=auth