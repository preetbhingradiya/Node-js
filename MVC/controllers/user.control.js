// const { model } = require("mongoose");
const user = require("../models/schema-model");
const { default: check } = require("../middleware/check");
const bcrypt = require("bcrypt");
// const Jwt = require("jsonwebtoken");

const home = async (req, res) => {
  // const token = req.cookies.token;
  // const decode = Jwt.verify(token, "sdfguikmnfchjwio"); //same keys is passed sdfguikmnfchjwio
  // req.data = await user.findById(decode._id);

  // res.render("home", { name: req.data.name });
  res.render('home')
  // const {token}=req.cookies
  // console.log(token);
  // if(token){
  // }
};

const find = async (req, res) => {
  res.render("index");
};

const login = async (req, res) => {
  const { name, email, password } = req.body;

  const data = await user.create({
    name,
    email,
    password,
  });
  // const id = Jwt.sign({ _id: data._id }, "sdfguikmnfchjwio");

  // res.cookie("token", id, {
  //   httpOnly: true,
  // });

  res.redirect("/");
};

const remove = async (req, res) => {
  await user.findByIdAndDelete(req.params.id);
  res.send("id is delete");
};

const update = async (req, res) => {
  await user.findByIdAndUpdate(req.params.id, req.body);
  res.send("id is update");
};

const sendImage = async (req, res) => {
  let image = [];
  let dir = __dirname.split("controllers", 1) 

  for (let i = 0; i < req.files.length; i++) {
    image.push(dir+req.files[i].path)
  }

  console.log(image);
  
  await user.findByIdAndUpdate(req.params.id,{path:image})

  res.send("image add succussfull");
};

const deleteImage = async (req, res) => {
  const image = await user.findByIdAndUpdate(req.params.id, req.body);

  res.status(200).json({
    succsess: true,
    Message: image,
  });
};

module.exports = { home, login, remove, update, find, sendImage, deleteImage };
