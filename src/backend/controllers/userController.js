// #region Imports

// Modules
const jwt = require("jsonwebtoken");

// Models
const User = require("../models/userModel");

// #endregion

/**
 * Create Authentication Token Using User Id
 * @param {string} _id
 * @returns Authentication Token
 */
const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "3d" });
};

/**
 * Log In User Using Request Body Credentials
 * @param {Request} req
 * @param {Response} res
 */
const loginUser = async (req, res) => {
  // Get Credentials from Request Body
  const { email, password } = req.body;

  try {
    // Log In User Using Credentials
    const user = await User.login(email, password);

    // Create Token Using User Id
    const token = createToken(user._id);

    // Return Logged In User Email and Authentication Token
    res.status(200).json({ email, token });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

/**
 * Register User Using Request Body Credentials
 * @param {object} req Web Request
 * @param {object} res Response to Send
 * @returns Registered User or Error Message
 */
const registerUser = async (req, res) => {
  // Get Credentials from Request Body
  const { email, password } = req.body;

  try {
    // Register User Using Credentials
    const user = await User.register(email, password);

    // Create Token Using User Id
    const token = createToken(user._id);

    // Return Logged In User Email and Authentication Token
    res.status(200).json({ email, token });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = {
  loginUser,
  registerUser,
};
