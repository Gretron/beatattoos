// #region Imports

// Modules
const mongoose = require("mongoose");

// Classes
const Schema = mongoose.Schema;

// #endregion

// Schema
const sampleSchema = new Schema({
  field: {
    type: String,
    // required: true,
    // unique: true,
    // min: 0,
    // max: 100,
    // enum: ["One", "Two", "Three"]
    // minLength: 0
    // maxLength: 100
  },
  user_id: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Sample", sampleSchema);
