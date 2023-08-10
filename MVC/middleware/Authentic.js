const auth=(req,res,next)=>{
    if(req.cookies.token=="prit"){
        next()
    }
    else{
        res.render('register')
    }

}

module.exports=auth