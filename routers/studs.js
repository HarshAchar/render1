const exp1 = require('express');
const model = require('../models/students');

const router1 = exp1.Router();

// POST
router1.post('/', async (req, res) => {
  const { name, phone, age, email } = req.body;

  const existingStudent = await model.findOne({ email });

  if (existingStudent) {
    return res
      .status(400)
      .send('A Student with this email is already registered');
  }

  // Create a new student document
  const student = new model({
    name,
    phone,
    age,
    email,
  });

  // Save the new student to the database
  try {
    const savedStudent = await student.save();
    res.status(200).json(savedStudent);
  } catch (error) {
    res.status(500).send('An unknown error occurred while saving the student');
  }
});

// get
router1.get('/', async (req, res) => {
  const stgetall = await model.find();
  res.send(stgetall);
});

module.exports = router1;
