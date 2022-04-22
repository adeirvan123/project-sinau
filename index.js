require('dotenv').config();
const express = require('express');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const path = require('path');
const ejsMate = require('ejs-mate');
const passport = require('passport');
const flash = require('express-flash');
const session = require('express-session');
const { checkAuth } = require('./middleware/auth');
const initialize = require('./utils/passport-config');
const User = require('./models/user');
const userRoute = require('./routes/user');

const app = express();

initialize(
  passport,
  async (email) => {
    const user = await User.findOne({ email });
    return user;
  },
  async (id) => {
    const user = await User.findOne({ _id: id });
    return user;
  }
);

app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(flash());
app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(methodOverride('_method'));

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/dashboard', checkAuth, async (req, res) => {
  res.render('dashboard', { user: req.user });
});

app.use('/auth', userRoute);

mongoose
  .connect('mongodb://0.0.0.0:27017/admin')
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`database and port is connected to port ${process.env.PORT}`);
    });
  })
  .catch((e) => {
    console.log(e);
  });
