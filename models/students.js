const { default: mongoose } = require('mongoose');
const mong = require('mongoose');

const s1schema = new mongoose.Schema({
  name: { type: String, require: true },
  age: Number,
  phone: { type: String, require: true },
  email: {
    type: String,
    require: true,
    unique: true,
  },
});

const studs = mongoose.model('studs', s1schema);

module.exports = studs;
