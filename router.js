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
    // res.redirect("/dashboard");
    res.end("Login Successful..!");
  } else {
    res.end("Invalid credetials - Try Again");
  }
});

module.exports = router;
