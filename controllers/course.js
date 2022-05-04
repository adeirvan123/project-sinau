const Course = require('../models/course');

module.exports.index = async (req, res) => {
  const courses = await Course.find({});
  res.render('pages/courses', {
    courses,
    user: req.user,
    session: req.session,
  });
};

module.exports.showCourse = async (req, res) => {
  const { id } = req.params;
  const course = await Course.findById(id);
  res.render('pages/singleCourse', {
    course,
    user: req.user,
    session: req.session,
  });
};

module.exports.about = (req, res) => {
  res.render('pages/about', { user: req.user, session: req.session });
};
