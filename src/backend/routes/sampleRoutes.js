// #region Imports

// Modules
const express = require("express");

// Controller Functions
const {
  getSamples,
  getSampleById,
  createSample,
  updateSample,
  deleteSample,
} = require("../controllers/sampleController");

// Middleware
const auth = require("../middleware/authentication");

// #endregion

// Router
const router = express.Router();

// Require Authentication for Sample Routes
router.use(auth);

// Get All Samples Route
router.get("/", getSamples);

// Create New Sample Route
router.post("/", createSample);

// Get Sample Using Id Route
router.get("/:id", getSampleById);

// Update Sample Using Id Route
router.patch("/:id", updateSample);

// Delete Sample Using Id Route
router.delete("/:id", deleteSample);

module.exports = router;
