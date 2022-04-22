const local = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');

const initialize = (passport, getUserEmail, getUserId) => {
  const authUser = async (email, password, done) => {
    const user = await getUserEmail(email);
    if (user == null) {
      return done(null, false, { message: 'wrong credential!' });
    }
    try {
      if (await bcrypt.compare(password, user.password)) {
        return done(null, user);
      } else {
        return done(null, false, { message: 'wrong credential!' });
      }
    } catch (error) {
      return done(error);
    }
  };
  passport.use(new local({ usernameField: 'email' }, authUser));
  passport.serializeUser((user, done) => done(null, user.id));
  passport.deserializeUser(async (id, done) => {
    return done(null, await getUserId(id));
  });
};

module.exports = initialize;
