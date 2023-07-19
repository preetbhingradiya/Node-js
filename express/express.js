const express = require("express");
const cheak = require("./midelware");
const conect = require("./datastore");
const user = require("./sign");


const port = express();

port.use(express.json());
port.use(express.urlencoded({extended:true}))

let databas = [
  {
    id: 1,
    name:"paran",
    email: "paran@gmail.com",
    password:1234    
  },
  {
    id: 2,
    name:"meet",
    email: "meet@gmail.com",
    password:7654
  },
  {
    id: 3,
    name:"kuldeep",
    email: "kuldeep@gmail.com",
    password:23456
  },
  {
    id: 4,
    name:"dhoni",
    email: "dhoni@gmail.com",
    password:"dhoni123"
  },
  {
    id: 5,
    name:"virat",
    email: "virat@gmail.com",
    password:901343
  },
  {
    id: 6,
    name:"jadeja",
    email: "jadeja@gmail.com",
    password:870193
  },
  {
    id: 7,
    name:"rohit",
    email: "rohit@gmail.com",
    password:10263
  },
];

port.get("/", (req, res) => {
  let rate=req.query.rang
  let product=databas.filter((val)=>val.rate>rate)
  console.log("done");
  res.send(product);
});

port.get("/product", (req, res) => {
  res.send("product page are created");
});

//midelware chack the static array(db)
// port.post("/signup",cheak,(req, res) => {
//   // res.send(req.body)
//   let exit = false;
//   for (let i = 0; i < databas.length; i++) {
//     if (databas[i].name == req.body.name) {
//       exit = true;
//       break;
//     }
//   }

//   if (exit) {
//     res.send("user name is alredy exit");
//   } else {
//     databas.push(req.body);
//     console.log(databas);
//     res.send("user is add");
//   }
// });


//conect to online server mondodb
{
port.post("/signup",async(req, res) => {
  await user.create(req.body)
  res.send(req.body)
});
port.get("/signup",async(req, res) => {
  let datastore=await user.find()
  res.send(datastore)
});
port.patch("/update/:id",async(req, res) => {
  await user.findByIdAndUpdate(req.params.id)
  res.send("id is update")
});
port.delete("/delete/:id",async(req, res) => {
  await user.findByIdAndDelete(req.params.id)
  res.send("id is delete")
});
}

port.get('/signin',(req, res) => {
  // res.send(databas)
  console.log("ok"); 
  // console.log(__dirname);   it can us show parth of file
  res.sendFile(__dirname + '/form-page/index.html')
});

port.delete("/delete/:id", (req, res) => {
  for (let i = 0; i < databas.length; i++) {
    if (databas[i].id == req.params.id) {
      console.log(databas.splice(req.params.id - 1,1));
      break;
    }
  }
  res.send(databas);
});

port.patch("/update/:id", (req, res) => {
  databas[req.params.id - 1].name = req.body.name;
  res.send(databas);
});

port.listen(6070, () => {
  console.log("port are scusessful run for 6070");
  conect()
});