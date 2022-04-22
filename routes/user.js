const express = require('express');
const { checkNotAuth } = require('../middleware/auth');
const users = require('../controllers/user');
const router = express.Router();

router
  .route('/sign-in')
  .get(checkNotAuth, users.renderSignIn)
  .post(checkNotAuth, users.signIn);

router
  .route('/sign-up')
  .get(checkNotAuth, users.renderSignUp)
  .post(checkNotAuth, users.signUp);

router.get('/logout', users.signOut);

module.exports = router;
