// #region Imports

// Modules
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

// Routes
const userRoutes = require("./routes/userRoutes");
const sampleRoutes = require("./routes/sampleRoutes");

// #endregion

// Express Application
const app = express();

// Middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// Routes
app.use("/api/user", userRoutes);
app.use("/api/samples", sampleRoutes);

// Database Connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(
        `Database Connection Established & Listening on Port ${process.env.PORT}`
      );
    });
  })
  .catch((err) => {
    console.log(err);
  });
