const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.get('/', (req, res) => {
  console.log('this is the users router');
})

module.exports = router;
