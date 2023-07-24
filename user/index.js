const express = require("express");
const connect = require("./connect");
const customer = require("./schema-model");

const user = express();
user.use(express.json());

user.get("/", async (req, res) => {
  res.send(await customer.find());
});

user.get("/name", async (req, res) => {
  //    let temp= await customer.find({
  //       gender: req.query.gender,
  //       language:{$in:["Dari","Swedish"]},
  //     })
  //     res.send(temp)

  let store = await customer.find({
    $or: [
      { gender: "Male", language: "Dari" },

      { gender: "Female", language: "Hindi" },
    ],
  });
  res.send(store);
});

user.get("/shirt", async (req, res) => {
  let temp = await customer.find({
    gender: "Female",
    shirt_size: req.query.shirt_size,
  });
  res.send(temp);
});

user.get("/language", async (req, res) => {
//   let temp = await customer.find({
//     $or:[
//         {  gender: "Male",language: { $in: ["Malay", "Bulgarian"] } },

//         {  gender: "Female",language: { $in: ["Swedish", "Bulgarian"] } }
//     ]
//  });
//   res.send(temp);

    let temp=await customer.find({
        gender:"Female",
        language:{$in:["Greek","Moldovan","Dutch"]}
    })
    res.send(temp)
});

user.post("/", async (req, res) => {
  let add = await customer.create(req.body);
  res.send(add);
});

user.delete("/:id", async (req, res) => {
  await customer.findByIdAndDelete(req.params.id);
  res.send("id is delete");
});

user.listen(3000, () => {
  console.log("port is run !");
  connect();
});
