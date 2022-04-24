const User = require('../models/user');
const bcrypt = require('bcryptjs/dist/bcrypt');
const passport = require('passport');

module.exports.renderSignIn = (req, res) => {
  res.render('auth/login');
};

module.exports.signIn = passport.authenticate('local', {
  successRedirect: '/course',
  failureRedirect: '/auth/sign-in',
  failureFlash: true,
});

module.exports.renderSignUp = (req, res) => {
  res.render('auth/register');
};

module.exports.signUp = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (user) {
    req.flash('error', 'Email already exists');
    res.redirect('/auth/sign-in');
  } else {
    try {
      const hashed = await bcrypt.hash(req.body.password, 10);
      const user = new User({
        username: req.body.username,
        email: req.body.email,
        password: hashed,
      });
      await user.save();
      res.redirect('/auth/sign-in');
    } catch (error) {
      console.log(error);
      res.redirect('/auth/sign-up');
    }
  }
};

module.exports.signOut = (req, res) => {
  req.logOut();
  res.redirect('/auth/sign-in');
};
