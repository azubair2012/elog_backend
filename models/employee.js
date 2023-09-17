const mongoose = require("mongoose");

// Define a schema for the data
const employeeSchema = new mongoose.Schema({
  id: Number,
  name: String,
  position: String,
  date: Date,
});

// Create a model for the schema
const Employee = mongoose.model("Employee", employeeSchema);

module.exports = Employee;
