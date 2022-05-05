const multer = require('multer');
const { storage } = require('../cloudinary');

const multerUpload = multer({ storage }).single('profilePicture');

module.exports = multerUpload;
