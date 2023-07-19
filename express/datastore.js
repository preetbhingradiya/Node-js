const mongoose = require("mongoose");

const conect = async () => {

  await mongoose.connect("mongodb+srv://preetbhingradiya6:node-js@cluster0.f9de8bk.mongodb.net/?retryWrites=true&w=majority");

  console.log("connect data");
};

module.exports = conect;
