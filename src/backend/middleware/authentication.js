// #region Imports

// Modules
const jwt = require("jsonwebtoken");

// Models
const User = require("../models/userModel");

// #endregion

/**
 * Authenticate User Using Authentication Header from Request
 * @param {object} req Web Request
 * @param {object} res Response to Send
 * @param {function} next Function to Proceed
 */
const auth = async (req, res, next) => {
  // Get Authorization Header
  const { authorization } = req.headers;

  // If Authorization Header Is Missing...
  if (!authorization) {
    return res.status(401).json({ error: "Missing authorization header." });
  }

  // Get Token from Authorization Header
  const token = authorization.split(" ")[1];

  try {
    // Verify Token Authenticity and Extract User Id
    const { _id } = jwt.verify(token, process.env.SECRET);

    // Find User Using Id
    req.user = await User.findOne({ _id }).select("_id");

    next();
  } catch (err) {
    console.log(err);

    res.status(401).json({ error: "Invalid authorization header." });
  }
};

module.exports = auth;
