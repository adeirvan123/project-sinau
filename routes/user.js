const express = require('express');
const { checkNotAuth } = require('../middleware/auth');
const users = require('../controllers/user');
const catchAsync = require('../utils/catchAsync');
const router = express.Router();

router
  .route('/sign-in')
  .get(checkNotAuth, users.renderSignIn)
  .post(checkNotAuth, users.signIn);

router
  .route('/sign-up')
  .get(checkNotAuth, users.renderSignUp)
  .post(checkNotAuth, catchAsync(users.signUp));

router.get('/sign-out', users.signOut);

module.exports = router;
