const  Router  = require("express");
const product = require("../models/product-model");

const productRoute=Router()

productRoute.get('/',(req,res)=>{
    res.render("product")
})
productRoute.get('/show',async(req,res)=>{
   let products= await product.find()
    res.json(products)
})
productRoute.post('/add',async(req,res)=>{
    let products=await product.create(req.body)
    res.json({success:true,products})
})


module.exports=productRoute