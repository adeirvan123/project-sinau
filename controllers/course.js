const Course = require('../models/course');

module.exports.index = async (req, res) => {
  const courses = await Course.find({});
  res.render('home', { courses, user: req.user, session: req.session });
};

module.exports.showCourse = async (req, res) => {
  const { id } = req.params;
  const c = await Course.findById(id);
  res.render('course', { c, user: req.user, session: req.session });
};

module.exports.about = (req, res) => {
  res.render('about', { user: req.user, session: req.session });
};
