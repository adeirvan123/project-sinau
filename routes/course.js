const courses = require('../controllers/course');
const { checkAuth } = require('../middleware/auth');
const catchAsync = require('../utils/catchAsync');
const express = require('express');

const router = express.Router();

router.route('/').get(courses.index);

router.route('/about').get(courses.about);

router.route('/course/:id').get(checkAuth, courses.showCourse);

module.exports = router;
