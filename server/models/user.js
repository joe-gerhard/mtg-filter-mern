const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  imageUrl: String,
  googleId: String,
  givenName: String,
  familyName: String,
}, {timestamps: true});

module.exports = mongoose.model('User', UserSchema);