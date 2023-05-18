'use strict';

const express = require('express');
const router = express.Router();
const { iceCreamModel } = require('../models/index');

router.get('/ice-cream', async (req, res) => {
  try {
    let allIceCream = await iceCreamModel.findAll();
    
    res.status(200).send(allIceCream);
  } catch (error) {
    next(error);
  }

});

router.get('/ice-cream/:id', async (req, res) => {
  let singleIceCream = await iceCreamModel.findAll({where: {id: req.params.id}});

  res.status(200).send(singleIceCream);
});

router.post('/ice-cream', async (req, res) => {
  let newIceCream = await iceCreamModel.create(req.body);

  res.status(200).send(newIceCream);
});

module.exports = router;
