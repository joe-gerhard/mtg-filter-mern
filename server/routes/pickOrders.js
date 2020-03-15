const express = require('express');
const router = express.Router();
const PickOrder = require('../models/pickOrder');

router.get('/', (req, res) => {
  PickOrder.find({userId: '5e0fa7124eed0280ffa98dc7'}, (err, pickOrders) => {
    res.send(pickOrders);
  })
})

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
    picks: req.body.picks,
    name: req.body.name,
  }, { new: true }, (err, pickOrder) => {
    res.send(pickOrder);
  })
})

router.delete('/:id', (req, res) => {
  PickOrder.findByIdAndDelete(req.params.id, (err, pickOrder) => {
    res.send(pickOrder);
  });
})

module.exports = router;
