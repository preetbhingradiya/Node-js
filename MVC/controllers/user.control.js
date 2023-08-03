// const { model } = require("mongoose");
const user = require("../models/schema-model");
const { default: check } = require("../middleware/check");
const bcrypt = require("bcrypt");
const Jwt = require("jsonwebtoken");

const home = async (req, res) => {
  const  token  = req.cookies.token;
  const decode = Jwt.verify(token, "sdfguikmnfchjwio"); //same keys is passed sdfguikmnfchjwio
  req.data = await user.findById(decode._id);

  res.render("home", { name: req.data.name });
};

const find = async (req, res) => {
  res.render("index");
};

const login = async (req, res) => {
  const { name, email, password } = req.body;

  const hashpass = await bcrypt.hash(password, 10);

  const data = await user.create({
    name,
    email,
    password,
    // password:hashpass,
  });

  const id = Jwt.sign({ _id: data._id }, "sdfguikmnfchjwio");

  res.cookie("token", id, {
    httpOnly: true,
  });

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

const sendImage=async(req,res)=>{
  console.log(req.file);

  await user.create({
    path:req.file.path
  })

  res.send("Image Uplode Succsess")
}

module.exports = { home, login, remove, update, find ,sendImage};
