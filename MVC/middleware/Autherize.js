
const isAutherize=(req,res,next)=>{
    if (req.user) {
        return next();
      } else {
        return res.redirect("/login/templet");
      }
}


module.exports=isAutherize