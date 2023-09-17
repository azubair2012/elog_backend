const Employee = require("../models/employee"); // Import the Country model
const express = require("express");
const router = express.Router();

// PUT route to update an employee by ID
router.put("/:id", async(req, res) => {
    try {
        const { id } = req.params; // Get the employee ID from the URL
        const { name, position, date } = req.body; // Updated data for the employee

        // Find the employee by ID and update their data
        const updatedEmployee = await Employee.findByIdAndUpdate(id, {
            name: name,
            position: position,
            date: date,
        });
        if (!updatedEmployee) {
            return res.status(404).json({ error: "Employee not found" });
        }
        res.json(updatedEmployee);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;