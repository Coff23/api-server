'use strict';

require('dotenv').config();
const { sequelizeDatabase } = require('./src/models');
const { start } = require('./src/server');
const PORT = process.env.PORT || 3002;

sequelizeDatabase.sync()
  .then(() => {
    console.log('successful');
    start(PORT);

  })
  .catch((e) => console.error(e));
