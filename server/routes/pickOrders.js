const express = require('express');
const router = express.Router();
const PickOrder = require('../models/pickOrder');

router.get('/:id', (req, res) => {
  PickOrder.find({userId: req.params.id}, (err, pickOrders) => {
    res.send(pickOrders);
  })
})

router.post('/create', (req, res) => {
  console.log(req.body);
  PickOrder.create(req.body, (err, pickOrder) => {
    res.send(pickOrder);
  })
})

module.exports = router;
