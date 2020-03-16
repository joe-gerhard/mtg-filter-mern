const express = require('express');
const router = express.Router();
const Card = require('../models/card');

router.get('/:id', (req, res) => {
  Card.find({set: req.params.id}, (err, cards) => {

    // Remove adventures and basic lands 
    let filteredCards = cards.filter(card => {
      return (
        card.multiverseId &&
        !card.type.includes('Adventure') &&
        !card.type.includes('Basic Land')
        )
      })
     
    // Remove cards with duplicate names  
    let duplicates = {}
    let temp = []

    filteredCards.forEach(card => {
      if (!duplicates[card.name]) {
        temp.push(card)
        duplicates[card.name] = 1;
      } else {
        duplicates[card.name]++
      }
    })

    filteredCards = temp
    
    // Sord cards by number
    filteredCards.sort((a, b) => {
      return a.number - b.number
    })

    res.send(filteredCards);
  })
})


module.exports = router;
