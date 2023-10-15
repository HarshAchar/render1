const exp1 = require('express');
const mong1 = require('mongoose');
const students = require('../models/students');

const router1 = exp1.Router();

// post
router1.post('/', async (req, res) => {
  const { name, phone, age, email } = req.body;
  let student = await students.find({ email });

  if (student) return res.send('You are already registered');

  student = new students({
    name,
    phone,
    age,
    email,
  });
  await student.save();
  res.send(student).status(201);
});

// get
router1.get('/', async (req, res) => {
  const studs1 = await students.find();
  res.send(studs1);
});

module.exports = router1;
