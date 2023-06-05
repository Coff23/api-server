'use strict';

const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config();
const iceCream = require('./ice-cream');
const topping = require('./toppings');
// const Collection = require('./collection');

const DATABASE_URL = process.env.DATABASE_URL === 'test' ? 'sqlite::memory' : process.env.DATABASE_URL;

const sequelizeDatabase = new Sequelize(DATABASE_URL);

const iceCreamModel = iceCream(sequelizeDatabase, DataTypes);
const toppingModel = topping(sequelizeDatabase, DataTypes);

iceCreamModel.hasMany(toppingModel);
toppingModel.belongsTo(iceCreamModel);

module.exports = {
  sequelizeDatabase,
  iceCreamModel,
  // topping: new Collection(toppingModel),
  toppingModel,
};