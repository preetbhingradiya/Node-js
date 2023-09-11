const express = require("express");
const connect = require("./confing/databse");
const cors=require('cors')
const server = require("./routes/routes");
const path=require('path');
const cookie=require("cookie-parser");
const route = require("./routes/register");
const passport=require("passport");
const session=require("express-session")
const loginAuth = require("./middleware/loginAuth");
const googleAuth = require("./middleware/google.Auth");
const productRoute = require("./routes/product");
const blogRoute = require("./routes/blog-route");

loginAuth(passport)
googleAuth(passport)

require("dotenv").config();
const app = express();
app.use(express.json());
app.use(cors())
app.use(cookie())

app.use(express.static(path.join(path.resolve(),"public")))  //public folder uplode
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.use(session({secret:"secret",resave:false,saveUninitialized:false}))
app.use(passport.initialize())
app.use(passport.session())

let port = process.env.port || 7070;

app.use(server)
app.use(route)
app.use('/product',productRoute)
app.use('/blog',blogRoute)

app.listen(port,()=>{
    console.log(`connect to data base ${port}`);
    connect()
});