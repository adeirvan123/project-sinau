const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const courseSchema = new Schema({
  name: String,
  instructor: String,
  image: String,
  desc: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
  video: [String],
});

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;
