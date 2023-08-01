const express = require("express");
const connect = require("./confing/databse");
const cors=require('cors')
const server = require("./routes/routes");

require("dotenv").config();
const app = express();
app.use(express.json());
app.use(cors())

let port = process.env.port || 7070;

app.use("/user",server)

app.listen(port,()=>{
    console.log("connect to data base");
    connect()
});