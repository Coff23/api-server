'use strict';

const express = require('express');
const router = express.Router();
const { topping } = require('../models');

router.get('/topping', async (req, res) => {
  let toppings = await topping.read();

  res.status(200).send(toppings);
});

router.get('/topping/:id', async (req, res) => {
  let singleTopping = await topping.read({where: {id: req.params.id}});

  res.status(200).send(singleTopping);
});

router.post('/topping', async (req, res, next) => {
  console.log(req.body);
  try {
    let newTopping = await topping.create(req.body);
    
    res.status(200).send(newTopping);
  } catch (error) {
    next(error);
  }
});

router.put('/topping/:id', async (req, res, next) => {
  try {
    await topping.update(req.body, {where: {id: req.params.id}});
    const updateTopping = await topping.findByPk(req.params.id);
    res.status(200).send(updateTopping);
  } catch (error) {
    next(error);
  }
});

router.delete('/topping/:id', async (req, res, next) => {
  try {
    const deleteTopping = await topping.findByPk(req.params.id);
    await topping.destroy({where: {id: req.params.id}});
    res.status(200).send(deleteTopping);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
