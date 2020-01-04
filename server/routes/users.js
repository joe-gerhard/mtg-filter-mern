const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.post('/google', (req, res) => {
  const { googleId, imageUrl, email, name, givenName, familyName } = req.body.profile;
  User.findOne({googleId}, (err, user) => {
    if (user) {
      res.send(user);
    } 
    else {
      User.create({ googleId, imageUrl, email, name, givenName, familyName }, (err, user) => {
        res.send(user);
      })
    }
  })
})

module.exports = router;
