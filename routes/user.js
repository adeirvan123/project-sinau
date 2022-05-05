const express = require('express');
const { checkNotAuth, checkAuth } = require('../middleware/auth');
const multerUpload = require('../middleware/multerUpload');
const users = require('../controllers/user');
const catchAsync = require('../utils/catchAsync');
const router = express.Router();

router
  .route('/account/:id')
  .get(checkAuth, catchAsync(users.renderUpdate))
  .put(multerUpload, catchAsync(users.updateUser));

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
