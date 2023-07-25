const { model } = require("mongoose");
const server = require("../routes/routes");
const user = require("../models/schema-model");

const home = (req, res) => {
  res.send("home");
};

const login = async (req, res) => {
  res.send(await user.create(req.body));
};

module.exports = { home, login };
