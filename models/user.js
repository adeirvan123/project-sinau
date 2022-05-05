const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  profile: {
    type: String,
    default:
      'https://res.cloudinary.com/wikitro/image/upload/v1651583520/Wikitro/user_bucv75.png',
  },
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
