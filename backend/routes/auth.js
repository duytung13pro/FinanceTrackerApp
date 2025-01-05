const express = require("express");
const User = require("../models/User"); // Import the User model
const router = express.Router();
const bcrypt = require("bcrypt");

// Register a new user
router.post("/register", async (req, res) => {

    const { username, email, password } = req.body;

    try {
      const existingUser = await User.findOne({ username });
      if (existingUser) {
        return res.status(401).json({ error: "Username already exists" });
      }

    // Hash the password for security
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const user = new User({ username, email, password: hashedPassword });
    await user.save();

    res.status(201).json({ message: "User registered successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Error registering user: " + error.message });
  }
});

// Export the router
module.exports = router;
