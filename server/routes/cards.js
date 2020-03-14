const express = require('express');
const router = express.Router();
const Card = require('../models/card');

router.get('/:id', (req, res) => {
  Card.find({set: req.params.id}, (err, cards) => {
    res.send(cards);
  })
})


module.exports = router;
