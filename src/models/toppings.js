'use strict';

module.exports = (sequelizeDatabase, DataTypes) => {
  return sequelizeDatabase.define('iceCream', {
    topping: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};