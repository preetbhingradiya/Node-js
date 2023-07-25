const express = require("express");
const connect = require("./confing/databse");
const server = require("./routes/routes");
require("dotenv").config();
const app = express();
app.use(express.json());

let port = process.env.port || 7070;

app.use("/user",server)

app.listen(port,()=>{
    console.log("connect to data base");
    connect()
});
