const courses = require('../controllers/course');
const { checkAuth } = require('../middleware/auth');
const catchAsync = require('../utils/catchAsync');
const express = require('express');

const router = express.Router();

router.route('/').get(courses.index);

router.route('/:id').get(checkAuth, catchAsync(courses.showCourse));

module.exports = router;
