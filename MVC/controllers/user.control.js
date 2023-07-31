// const { model } = require("mongoose");
const user = require("../models/schema-model");
const { default: check } = require("../middleware/check");

const home = async(req, res) => {
  res.send(await user.find());
};

const login = async (req, res) => {
  let { name, email, password } = req.body;

  if (name && email && password) {
    res.send(await user.create(req.body));
  } else {
    res.send("plase ender a valid detail !");
  }
};

const remove=async(req,res)=>{
  await user.findByIdAndDelete(req.params.id)
 res.send("id is delete")
}

const update=async(req,res)=>{
  await user.findByIdAndUpdate(req.params.id,req.body)
  res.send("id is update")
}

module.exports = { home, login,remove,update};
