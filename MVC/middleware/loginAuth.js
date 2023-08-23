const customer = require("../models/register-model");

const LocalStrategy = require("passport-local").Strategy;

const loginAuth = (passport) => {
  passport.use(new LocalStrategy(async (username, password, done) => {

    const data=await customer.findOne({username})

    if(!data) return done(null,false)

    if(data.password!==password) return done(null,false)

    return done(null,data)
  }));

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser(async (id, done) => {
    const value = await customer.findById( id );
    done(null, value);
  });

};

module.exports = loginAuth;
