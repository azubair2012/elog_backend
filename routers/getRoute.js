const express = require("express");
const router = express.Router();
const Employee = require("../models/employee"); // Import the Country model

// Create a GET route to retrieve all countries from the database
router.get("/", async (req, res) => {
  try {
    // Find all countries in the database
    const employees = await Employee.find();

    res.json(employees); // Respond with the list of countries
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
