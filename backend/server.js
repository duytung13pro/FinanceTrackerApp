const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const userRouter = require("./routes/auth"); // Ensure this is the correct path to your user routes file

require("dotenv").config();

const PORT = process.env.PORT || 3000;
const DB_USERNAME = process.env.DB_USERNAME;
const DB_PASSWORD = process.env.DB_PASSWORD;

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/user", userRouter); // Register your user routes under '/user'

// MongoDB Connection
mongoose
  .connect(
    `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@cluster0.vimxo.mongodb.net/myDatabase?retryWrites=true&w=majority`
  )
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Node API app is running on http://localhost:${PORT}`);
    });
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });

