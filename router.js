var express = require("express");
var router = express.Router();

const credetial = {
  email: "waribu@gmail.com",
  password: "123456",
};

//router for the login user
router.post("/login", (req, res) => {
  if (
    req.body.email == credetial.email &&
    req.body.password == credetial.password
  ) {
    req.session.user = req.body.email;
    res.redirect("/route/dashboard");
    // res.end("Login Successful..!");
  } else {
    res.end("Invalid credetials - Try Again");
  }
});

//route for Dashboard
router.get("/dashboard", (req, res) => {
  if (req.session.user) {
    res.render("dashboard", { user: req.session.user });
  } else {
    res.send("Unauthorized User");
  }
});

//route for logout feature
router.get("/logout", (req, res) => {
  req.session.destroy(function (err) {
    if (err) {
      console.log(err);
      res.send("Error");
    } else {
      res.render("base", {
        title: "Express",
        logout: "Logout Successfully...!",
      });
    }
  });
});

module.exports = router;
