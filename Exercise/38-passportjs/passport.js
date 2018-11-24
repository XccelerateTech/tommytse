const passport = require("passport");
const LocalStrategy = require("passport-local");
const knex = require("knex")({
  client: "postgresql",
  connection: {
    database: "postgres",
    user: "tommytks",
    password: "password"
  }
});
const bcrypt = require('./bcrypt');
module.exports = app => {
  app.use(passport.initialize());
  app.use(passport.session());
//passport.use(new LocalStrategy)
  passport.use(
    "local-login",
    new LocalStrategy(async (email, password, done) => {
      //see usage from npm passport
      try {
        let users = await knex("users").where({ email: email }); //same as where('email', email) {:},{:} for multiple conditions
        if (users.length == 0) {
          return done(null, false); //for invoke detail see http://www.passportjs.org/docs/downloads/html/
        }
        let user = users[0];//convert [..]to string
        /*
        if (user.password == password) {
          return done(null, user);
        } else {
          return done(null, false);
        }
        */
        let result = await bcrypt.checkPassword(password, user.password);
        if (result) {
          return done(null, user);
        } else {
          return done(null, false);
        }
      } catch (err) {
        return done(err);
      }
    })
  );
  //added
  passport.use(
    "local-signup",
    new LocalStrategy(async (email, password, done) => {
      try {
        let users = await knex("users").where({ email: email });
        if (users.length > 0) {//check if the email already exist in db
          return done(null, false, { message: "Email already taken" });
        }
        let hash = await bcrypt.hashPassword(password);
        const newUser = {
          email: email,
          password: hash
        };
        let userId = await knex("users")
          .insert(newUser)
          .returning("id");
        newUser.id = userId;
        done(null, newUser);//go to passport.serializeUser
      } catch (err) {
        done(err);
      }
    })
  );
//encrypt the user data
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });
//decrypt the user data and verify user info is correct
  passport.deserializeUser(async (id, done) => {
    let users = await knex("users").where({ id: id });
    if (users.length == 0) {
      return done(new Error(`Wrong user id ${id}`));
    }
    let user = users[0];
    return done(null, user);
  });
};
