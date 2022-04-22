const checkNotAuth = (req, res, next) => {
  if (req.isAuthenticated()) {
    return res.redirect('/dashboard');
  }
  next();
};

const checkAuth = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/auth/sign-in');
};

module.exports = {
  checkAuth,
  checkNotAuth,
};
