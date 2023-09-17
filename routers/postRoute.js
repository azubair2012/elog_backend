const express = require("express");
const router = express.Router();
const Employee = require("../models/employee"); // Import the Country model

// Create a POST route to add a new country to the database
router.post("/", async (req, res) => {
  const { id, name, position, date } = req.body;
  try {
    // Create a new country instance based on the request body
    const newEmployee = new Employee({ id, name, position, date });
    // Save the new country to the database
    const savedEmployee = await newEmployee.save();
    res.status(201).json(savedEmployee); // Respond with the saved country data
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
