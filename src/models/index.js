'use strict';

const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config();
const iceCream = require('./ice-cream');
const topping = require('./toppings');

const DATABASE_URL = process.env.DATABASE_URL;
console.log('DB URL:', DATABASE_URL);
const sequelizeDatabase = new Sequelize(DATABASE_URL);

const iceCreamModel = iceCream(sequelizeDatabase, DataTypes);
const toppingModel = topping(sequelizeDatabase, DataTypes);

module.exports = {
  sequelizeDatabase,
  iceCreamModel,
  toppingModel,
};