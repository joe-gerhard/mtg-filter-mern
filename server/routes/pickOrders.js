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
    res.send(pickOrder);
  })
})

router.put('/:id', (req, res) => {
  console.log(req.body.inputs);

  PickOrder.findByIdAndUpdate(req.params.id, {
    
  })
})

module.exports = router;
