// #region Imports

// Modules
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

// Classes
const Schema = mongoose.Schema;

// #endregion

// Schema
const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: false,
  },
  password: {
    type: String,
    required: true,
  },
  active: {
    type: Boolean,
    required: true,
  },
});

/**
 * Register User Using Credentials
 * @param {string} email Email of User
 * @param {string} password Password of User
 * @returns Registered User
 */
userSchema.statics.register = async function (email, password) {
  // Empty Fields Validation
  if (!email || !password) {
    throw Error("Please fill in missing fields.");
  }

  // Existing Email Validation
  const exists = await this.findOne({ email });

  if (exists) {
    throw Error("Email address already in use.");
  }

  // Email Format Validation
  const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  if (!emailPattern.test(email)) {
    throw Error("Invalid email address format.");
  }

  // Password Format Validation
  const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  if (!passwordPattern.test(password)) {
    throw Error("Password is not strong enough.");
  }

  // Hash Password
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  // Create User Using Fields
  const user = await this.create({ email, password: hash });

  // Return Registered User
  return user;
};

/**
 * Log In User Using Credentials
 * @param {string} email Email of User
 * @param {string} password Password of User
 * @returns Logged In User
 */
userSchema.statics.login = async function (email, password) {
  // Empty Validation
  if (!email || !password) {
    throw Error("Please fill in missing fields.");
  }

  // Existing Validation
  const user = await this.findOne({ email });

  if (!user) {
    throw Error("Invalid login credentials.");
  }

  // Password Match Validation
  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    throw Error("Invalid login credentials.");
  }

  // Return Logged In User
  return user;
};

module.exports = mongoose.model("User", userSchema);
