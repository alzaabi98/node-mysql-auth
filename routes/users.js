const express = require("express");

const router = express.Router();

//login form
router.get("/login", (req, res) => {
  res.send(" login  page");
});

// register page

router.get("/register", (req, res) => {
  res.send(" register new user");
});

module.exports = router;
