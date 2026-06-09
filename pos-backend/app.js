require("dotenv").config();
const express = require("express");
const connectDB = require("./config/database");
const AppError = require("./utils/AppError");
const asyncHandler = require("./middlewares/asyncHandler");
const globalErrorHandler = require("./middlewares/globalErrorHandler");
const notFound = require("./middlewares/notFound");
const authRoutes = require("./routes/authRoutes");

const app = express();

// Connect to MongoDB
connectDB();

const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Hello from POS Server!" });
});

app.use("/api/auth", authRoutes);

app.get(
  "/api/test-error",
  asyncHandler(async (req, res, next) => {
    next(new AppError("This is a test error from the request handler.", 400));
  })
);

app.use(notFound);
app.use(globalErrorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
