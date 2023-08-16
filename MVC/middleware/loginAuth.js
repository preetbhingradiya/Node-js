const customer = require("../models/register-model")

const LocalStrategy=require("passport-local").Strategy

const Auth=(passport)=>{

    passport.use(
        new LocalStrategy(async(username,password,done)=>{
            const data=await customer.findOne({username})

            if (!data) return done(null, false,);

            if (data.password !== password) return done(null, false,);
      
            return done(null, data);
        })
    )
}

module.exports=Auth
