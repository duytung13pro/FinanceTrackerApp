const express = require("express");
const User = require("../models/User"); // Import the User model
const router = express.Router();
const bcrypt = require("bcrypt");

// Register a new user
router.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Hash the password for security
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const user = new User({ username, email, password: hashedPassword });
    await user.save();

    res.status(201).send("User registered successfully!");
  } catch (error) {
    res.status(500).send("Error registering user: " + error.message);
  }
});

router.post("/")

// Export the router
module.exports = router;
