// midelware is check the condition and connec user and DB

const cheak = (req, res, next) => {
  let { name, rate } = req.body;

  if (name && rate) {
    next();
  } else {
    res.send("plase enter valid detile");
  }
};

module.exports = cheak;
