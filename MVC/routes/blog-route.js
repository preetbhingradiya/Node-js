const  Router  = require("express");
const {homeBlog, newBlog} = require("../controllers/blog-logic");
const isAutherize = require('../middleware/Autherize')

const blogRoute=Router()

blogRoute.get('/',homeBlog)

blogRoute.post('/new',isAutherize,newBlog)

module.exports=blogRoute