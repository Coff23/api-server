'use strict';

const express = require('express');
const router = express.Router();
const { toppingModel, iceCreamModel } = require('../models');

router.get('/ice-cream', async (req, res) => {
  let allIceCream = await iceCreamModel.findAll();

  res.status(200).send(allIceCream);
});

router.get('/ice-creamWithTopping', async (req, res, next) => {
  try {

    let iceCreams = await iceCreamModel.findAll({ include: { model: toppingModel } });

    res.status(200).send(iceCreams);

  } catch (error) {
    next(error);
  }

});

router.get('/ice-cream/:id', async (req, res, next) => {
  try {

    let singleIceCream = await iceCreamModel.findAll({
      include: { model: toppingModel },
      where: { id: req.params.id },
    });
    
    res.status(200).send(singleIceCream);
  } catch (error) {
    next(error);
  }

});


router.post('/ice-cream', async (req, res, next) => {
  try {

    let newIceCream = await iceCreamModel.create(req.body);

    res.status(200).send(newIceCream);
  } catch (error) {
    next(error);
  }

});

router.put('/ice-cream/:id', async (req, res, next) => {
  try {

    await iceCreamModel.update(req.body, { where: { id: req.params.id } });
    const updateIceCream = await iceCreamModel.findByPk(req.params.id);
    res.status(200).send(updateIceCream);
  } catch (error) {
    next(error);
  }

});

router.delete('/ice-cream/:id', async (req, res, next) => {
  try {

    const deleteIceCream = await iceCreamModel.findByPk(req.params.id);
    await iceCreamModel.destroy({ where: { id: req.params.id } });
    res.status(200).send(deleteIceCream);
  } catch (error) {
    next(error);
  }

});

module.exports = router;
