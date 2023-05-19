'use strict';

const express = require('express');
const cors = require('cors');
const iceCreamRouter = require('./routes/ice-cream');
const toppingRouter = require('./routes/toppings');
const notFound = require('./error-handlers/404');
const errorhandler = require('./error-handlers/500');

const app = express();

app.use(cors());
app.use(express.json());
app.use(iceCreamRouter);
app.use(toppingRouter);

app.get('/', (req, res, next) => {
  try {
    res.status(200).send('Hello World');
    
  } catch (error) {
    next(error);
  }
});

app.use('*', notFound);
app.use(errorhandler);

const start = (port) => {
  app.listen(port, () => console.log('server running on', port));
};

module.exports = {
  app,
  start,
};