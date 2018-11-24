const passport = require("passport");

module.exports = express => {
  const router = express.Router();
  function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {//return true if passport.js successfully authenticated a user
      return next();
    }
    res.redirect("/login");
  }

  router.get("/secret", isLoggedIn, (req, res) => {
    res.send("Here you go, a secret");
  });

  router.get("/login", (req, res) => {
    res.sendFile(__dirname + "/login.html");
  });

  router.post(
    "/login",
    passport.authenticate("local-login", {//passport.use('local-login', new Strategy(...))
      successRedirect: "/",
      failureRedirect: "/error"
    })
  );

  router.get("/error", (req, res) => {
    res.send("You are not logged in!");
  });

  router.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
  });
//added
  router.get("/signup", (req, res) => {
    res.sendFile(__dirname + "/signup.html");
  });
//added
  router.post(
    "/signup",
    passport.authenticate("local-signup", {//passport.use('local-signup, new Strategy(...))
      successRedirect: "/secret",
      failureRedirect: "/error"
    })
  );

  return router;
};
