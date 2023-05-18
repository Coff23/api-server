'use strict';

const express = require('express');
const router = express.Router();
const { toppingModel } = require('../models/index');

router.get('/topping', async (req, res, next) => {
  let topping = await toppingModel.findAll();

  res.status(200).send(topping);
});

router.get('/topping/:id', async (req, res, next) => {
  let singleTopping = await toppingModel.findAll({where: {id: req.params.id}});

  res.status(200).send(singleTopping);
});

router.post('/topping', async (req, res, next) => {
  let newTopping = await toppingModel.create(req.body);

  res.status(200).send(newTopping);
});

module.exports = router;
