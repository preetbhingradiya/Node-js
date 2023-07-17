const express = require("express");
const cheak = require("./midelware");


const port = express();

port.use(express.json());
port.use(express.urlencoded({extended:true}))

let databas = [
  {
    id: 1,
    name: "paran",
    rate:70    
  },
  {
    id: 2,
    name: "meet",
    rate:50
  },
  {
    id: 3,
    name: "kuldeep",
    rate:33
  },
  {
    id: 4,
    name: "dhoni",
    rate:12.22
  },
  {
    id: 5,
    name: "virat",
    rate:90
  },
  {
    id: 6,
    name: "jadeja",
    rate:87
  },
  {
    id: 7,
    name: "rohit",
    rate:10
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

port.post("/login",cheak,(req, res) => {
  // res.send(req.body)
  let exit = false;
  for (let i = 0; i < databas.length; i++) {
    if (databas[i].name == req.body.name) {
      exit = true;
      break;
    }
  }

  if (exit) {
    res.send("user name is alredy exit");
  } else {
    databas.push(req.body);
    console.log(databas);
    res.send("user is add");
  }
});

port.get('/signin',(req, res) => {
  // res.send(databas)
  console.log("ok"); 
  // console.log(__dirname);   it can us the parth of file
  res.sendFile(__dirname + '/index.html')
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
});
