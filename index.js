require('dotenv').config();
const express1 = require('express');
const student = require('./routers/studs');
const mongoose = require('mongoose');

const app = express1();
app.use(express1.json());
app.use('/api/students', student);

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`App is running on port: ${port}`));

mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => console.log('MongoDB Connected'));
