require("dotenv").config();
const express = require("express");
const connectDB = require("./config/database");
const app = express();

// Connect to MongoDB
connectDB();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.json({ message: "Hello from POS Server!" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
