const express = require('express');
const router = express.Router();
const PickOrder = require('../models/pickOrder');

router.get('/:id', (req, res) => {
  PickOrder.find({userId: req.params.id}, (err, pickOrders) => {
    res.send(pickOrders);
  })
})

router.post('/create', (req, res) => {
  PickOrder.create(req.body, (err, pickOrder) => {
    console.log('creating new pick order')
    res.send(pickOrder);
  })
})

router.put('/:id', (req, res) => {
  PickOrder.findByIdAndUpdate(req.params.id, {
    picks: req.body.picks
  }, { new: true }, (err, pickOrder) => {
    res.send(pickOrder);
  })
})

module.exports = router;
