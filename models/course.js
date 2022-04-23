const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const courseSchema = new Schema({
  name: String,
  image: String,
  desc: String,
});

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;
