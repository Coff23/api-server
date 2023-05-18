'use strict';

const express = require('express');
const router = express.Router();
const { iceCreamModel } = require('../models/index');

router.get('/ice-cream', async (req, res) => {
  let allIceCream = await iceCreamModel.findAll();

  res.status(200).send(allIceCream);
});

router.get('/ice-cream/:id', async (req, res) => {
  let singleIceCream = await iceCreamModel.findAll({ where: { id: req.params.id } });

  res.status(200).send(singleIceCream);
});

router.post('/ice-cream', async (req, res, next) => {
  let newIceCream = await iceCreamModel.create(req.body);

  res.status(200).send(newIceCream);
});

module.exports = router;
