// const { model } = require("mongoose");
const user = require("../models/schema-model");
const { default: check } = require("../middleware/check");
const bcrypt=require('bcrypt')

const home = async (req, res) => {
  res.send(await user.find());
};

const login = async (req, res) => {
  const {name,email,password}=req.body

  const hashpass=await bcrypt.hash(password,10)

  await user.create({
    name,
    email,
    password:hashpass,
  });
  res.send(req.body);
};

const remove = async (req, res) => {
  await user.findByIdAndDelete(req.params.id);
  res.send("id is delete");
};

const update = async (req, res) => {
  await user.findByIdAndUpdate(req.params.id, req.body);
  res.send("id is update");
};

module.exports = { home, login, remove, update };
