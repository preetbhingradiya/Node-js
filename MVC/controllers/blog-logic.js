const blog = require("../models/blog")

const homeBlog=(req,res)=>{
    res.render("blog")
}

const newBlog=async(req,res)=>{
    req.body.userId=req.user.id
    let blogs=await (await blog.create(req.body)).populate("userId")
    res.status(200).json({
        success:true,
        blogs
    })
}

module.exports={homeBlog,newBlog}