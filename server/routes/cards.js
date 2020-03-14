const express = require('express');
const router = express.Router();
const Card = require('../models/card');

router.get('/:id', (req, res) => {
  Card.find({set: req.params.id}, (err, cards) => {
    let filteredCards = cards.filter(card => {
      return (
        card.multiverseId &&
        !card.type.includes('Adventure') &&
        !card.type.includes('Basic Land')
      )
    })
    
    filteredCards.sort((a, b) => {
      return a.number - b.number
    })

    res.send(filteredCards);
  })
})


module.exports = router;
