const express = require("express");
const User = require("../models/User"); // Import the User model
const router = express.Router();
const bcrypt = require("bcrypt");

// Register a new user
router.post("/register", async (req, res) => {

  const { firstName, lastName, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(401).json({ error: "Email already exists" });
    }

    // Hash the password for security
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const user = new User({ firstName, lastName, email, password: hashedPassword });
    await user.save();

    res.status(201).json({ message: "User registered successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Error registering user: " + error.message });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if user exists 
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return res.status(401).json({ error: "Wrong login email or password" })
    };

    // Check if password is correct
    const hashedPassword = existingUser.password;
    const isCorrectPassword = await bcrypt.compare(password, hashedPassword);
    if (!isCorrectPassword) {
      return res.status(401).json({ error: "Wrong login email or password" })
    };

    res.status(200).json({ message: "Logged in successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Error logging in: " + error.message });
  }
});

// Export the router
module.exports = router;
