const express = require("express");

const router = express.Router();

//home page
router.get("/", (req, res) => {
  res.send(" Home page");
});

// dashboard page
router.get("/dashboard", (req, res) => {
  res.send(" Dashboard page");
});

module.exports = router;
