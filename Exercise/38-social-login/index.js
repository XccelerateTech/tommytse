//requiring neccessary modules
require("dotenv").config();
const express = require("express");
const expressSession = require("express-session");

const https = require("https");
const fs = require("fs");
//require and setting up passport
const passport = require("passport");
const FacebookStrategy = require("passport-facebook");
//unpack express and user body parser
const app = express();
const bodyParser = require("body-parser");

const redis = require("redis");
//redis as session store
const RedisStore = require("connect-redis")(expressSession);
const socketIOSession = require("socket.io.session");
/*
createClient() returns a RedisClient object which accepts some
arguments for setting
*/
const redisClient = redis.createClient({
  host: "localhost", //default 127.0.0.1
  port: 6379, //default 6379
  auth_pass: "test123" //password
});
//array of users, should use knex in group project
const users = [
  {
    id: 0,
    email: "tom@tom.com",
    password: "34b7da764b21d298ef307d04d8152dc5"
  },
  {
    id: 1,
    email: "peter@peter.com",
    password: "51dc30ddc473d43a6011e9ebba6ca770"
  }
];
//set up expressSession which verifies and tell us which user is which
//app.use(expressSession({
//   secret: 'supersecret'
// }));
const sessionStore = new RedisStore({
  client: redisClient,
  unset: "destroy"
});
const settings = {
  store: sessionStore,
  secret: "supersecret",
  cookie: { path: "/", httpOnly: true, secure: false, maxAge: null }
};

app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressSession(settings));

//tell express to use passport
app.use(passport.initialize());
app.use(passport.session());

//facebook strategy
passport.use(
  "facebook",
  new FacebookStrategy(
    {
      clientID: process.env.FACEBOOK_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
      callbackURL: "https://localhost:3000/auth/facebook/callback"
    },
    function(accessToken, refreshToken, profile, done) {
      console.log(profile);
      let userResult = users.filter(user => user.facebookID === profile.id);
      if (userResult == 0) {
        let user = {
          id: users.length++,
          facebookId: profile.id,
          email: profile.displayName,
          accessToken: accessToken
        };
        users.push(user);
        done(null, user);
      } else {
        done(null, userResult[0]);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

const deserializeUser = (id, done) => {
  let userResult = users.filter(user => user.id === id);
  if (userResult.length == 0) {
    return done(new Error(`Wrong user id ${id}`));
  }
  let user = userResult[0];
  return done(null, user);
};

passport.deserializeUser(deserializeUser);

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/login");
}

app.get("/", isLoggedIn, (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/error", (req, res) => {
  res.send("You are a failure.");
});

app.get(
  "/auth/facebook",
  passport.authenticate("facebook", {
    scope: ["user_friends", "manage_pages"]
  })
);
//?????????????? empty response from callback
app.get(
  "/auth/facebook/callback",
  passport.authenticate("facebook", { failureRedirect: "/error" }),
  (req, res) => res.send("successful login via facebook")
);

app.get("/login", (req, res) => {
  res.sendFile(__dirname + "/login.html");
});

const options = {
  cert: fs.readFileSync("./localhost.crt"),
  key: fs.readFileSync("./localhost.key")
};

const server = https.createServer(options, app);
const io = require("socket.io")(server);
io.use((socket, next) => {
  if (!socket.session.passport) {
    socket.emit("unauthorized");
    socket.disconnect();
  } else {
    deserializeUser(socket.session.passport.user, (err, user) => {
      socket.user = user;
      next();
    });
  }
});

io.on("connection", function(socket) {
  socket.on("disconnect", () => {
    console.log(socket.user.email + "has left us");
    socket.on("chat message", function(msg) {
      console.log(socket.user.email + "message" + msg);
      io.emit("chat message", socket.user.email + ":" + msg);
    });
  });
});

server.listen(3000);
