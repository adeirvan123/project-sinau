require('dotenv').config();
const mongoose = require('mongoose');
const Course = require('../models/course');
const { seeds } = require('./data');

mongoose.connect(process.env.MONGO_URI);

const seed = async () => {
  await Course.deleteMany({});
  for (let i = 0; i < seeds.length; i++) {
    const course = new Course({
      name: `${seeds[i].name}`,
      instructor: `${seeds[i].instructor}`,
      image: `${seeds[i].image}`,
      desc: `${seeds[i].desc}`,
      video: [
        `${seeds[i].video[i]}`,
        `${seeds[i].video[i]}`,
        `${seeds[i].video[i]}`,
        `${seeds[i].video[i]}`,
      ],
    });
    await course.save();
  }
};

seed().then(() => {
  mongoose.connection.close();
});
