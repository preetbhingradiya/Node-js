// midelware is check the condition and connec user and DB

const cheak = (req, res, next) => {
  let { name, email, password } = req.body;

  if (name && email && password) {
    next();
  } else {
    res.send("plase enter valid detile");
  }
};

module.exports = cheak;
