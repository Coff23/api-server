'use strict';

module.exports = (sequelizeDatabase, DataTypes) => {
  return sequelizeDatabase.define('toppings', {
    topping: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    iceCreamId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
};