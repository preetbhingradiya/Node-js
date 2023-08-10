const express = require("express");
const connect = require("./confing/databse");
const cors=require('cors')
const server = require("./routes/routes");
const path=require('path');
const cookie=require("cookie-parser");
const route = require("./routes/register");


require("dotenv").config();
const app = express();
app.use(express.json());
app.use(cors())
app.use(cookie())

app.use(express.static(path.join(path.resolve(),"public")))  //public folder uplode
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));


let port = process.env.port || 7070;

app.use(server)
app.use(route)

app.listen(port,()=>{
    console.log("connect to data base");
    connect()
});