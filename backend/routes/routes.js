const express = require("express");
const model = require("../model/model");
const router = express.Router();
const User = require("../model/model");

router.post("/register", async (req, res) => {
  try {
    await User.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
    });
    res.status(201).json({
      status: "Success",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: "Error",
    });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email }).select("+password");
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: "Error",
    });
  }
  res.status(200).json({
    status: "Success",
  });
});

module.exports = router;
// login
