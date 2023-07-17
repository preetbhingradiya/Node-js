let bd = [
  {
    id: 1,
    name: "preet",
  },
  {
    id: 1,
    name: "preet1",
  },
];

const pro = () => {
  let exit = false;
  for (let i = 0; i < bd.length; i++) {
      console.log(bd[i].name);
      exit = true;
    }
    console.log(exit);
};
pro();
