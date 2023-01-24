// #region Imports

// Modules
const express = require("express");

// Controller Funtions
const { loginUser, registerUser } = require("../controllers/userController");

// #endregion

// Router
const router = express.Router();

// Log In User Route
router.post("/login", loginUser);

// Register User Route
router.post("/register", registerUser);

module.exports = router;
