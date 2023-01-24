// #region Imports

// Modules
const mongoose = require("mongoose");

// Models
const Sample = require("../models/sampleModel");

// #endregion

/**
 * Get All Samples from User
 * @param {object} req Web Request
 * @param {object} res Response to Send
 * @returns Samples from User
 */
const getSamples = async (req, res) => {
  // Get User Id from Request
  const user_id = req.user._id;

  // Get All Samples Using User Id
  const samples = await Sample.find({ user_id });

  // Return Samples from User
  res.status(200).json(samples);
};

/**
 * Get Sample Using Id
 * @param {object} req Web Request
 * @param {object} res Response to Send
 * @returns Sample at Id or Error
 */
const getSampleById = async (req, res) => {
  // Get Sample Id Field from Parameters
  const { id } = req.params;

  // If Sample Id Parameter Isn't Valid...
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(400)
      .json({ error: "Invalid object identifier parameter." });
  }

  // Find Sample Using Id
  const sample = await Sample.findById(id);

  // If Sample Is Not Found...
  if (!sample) {
    return res
      .status(400)
      .json({ error: "Unable to find Sample object at identifier." });
  }

  // Return Sample at Id
  res.status(200).json(sample);
};

/**
 * Create Sample Using Request Body Fields
 * @param {object} req Web Request
 * @param {object} res Response to Send
 * @returns Created Sample or Error
 */
const createSample = async (req, res) => {
  // Get Fields from Request Body
  const { field } = req.body;

  // Get User Id from Request
  const user_id = req.user._id;

  try {
    // Create Sample Using Fields
    const sample = await Sample.create({
      field,
      user_id,
    });

    // Return Created Sample
    res.status(200).json(sample);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

/**
 * Update Sample Using Parameters
 * @param {object} req Web Request
 * @param {object} res Response to Send
 * @returns Updated Sample or Error
 */
const updateSample = async (req, res) => {
  // Get Sample Id Field from Parameters
  const { id } = req.params;

  // If Sample Id Parameter Isn't Valid...
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(400)
      .json({ error: "Invalid object identifier parameter." });
  }

  // Find Sample Using Id and Update Sample with Request Body Fields
  const sample = await Sample.findOneAndUpdate({ _id: id }, { ...req.body });

  // If Sample Is Not Found...
  if (!sample) {
    return res
      .status(400)
      .json({ error: "Unable to find Sample object at identifier." });
  }

  // Return Updated Sample
  res.status(200).json(sample);
};

/**
 * Delete Sample Using Id
 * @param {object} req Web Request
 * @param {object} res Response to Send
 * @returns Deleted Sample or Error Message
 */
const deleteSample = async (req, res) => {
  // Get Sample Id Field from Parameters
  const { id } = req.params;

  // If Sample Id Parameter Isn't Valid...
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(400)
      .json({ error: "Invalid object identifier parameter." });
  }

  // Find Sample Using Id and Update Sample with Request Body Fields
  const sample = await Sample.findOneAndDelete({ _id: id });

  // If Sample Is Not Found...
  if (!sample) {
    return res
      .status(400)
      .json({ error: "Unable to find Sample object at identifier." });
  }

  // Return Deleted Sample
  res.status(200).json(sample);
};

module.exports = {
  getSamples,
  getSampleById,
  createSample,
  updateSample,
  deleteSample,
};
