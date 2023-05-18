'use strict';

const express = require('express');
const cors = require('cors');
const iceCreamRouter = require('./routes/ice-cream');
const toppingRouter = require('./routes/toppings');

const app = express();

app.use(cors());
app.use(express());
app.use(iceCreamRouter);
app.use(toppingRouter);

app.get('/', (req, res, next) => {
  res.status(200).send('Hello World');
});

const start = (port) => {
  app.listen(port, () => console.log('server running on', port));
};

module.exports = {
  app,
  start,
};