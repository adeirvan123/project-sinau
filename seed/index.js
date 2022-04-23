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
      image: `${seeds[i].image}`,
      desc: `${seeds[i].desc}`,
    });
    await course.save();
  }
};

seed();
