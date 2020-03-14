const express = require('express');
const router = express.Router();
const Set = require('../models/set');

router.get('/', (req, res) => {
  Set.find({}, (err, sets) => {
    let filteredSets = sets.filter(set => {
      return set.type.includes('core') || set.type.includes('expansion')
    })
    res.send(filteredSets);
  })
})


module.exports = router;
