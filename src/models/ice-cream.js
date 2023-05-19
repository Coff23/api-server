'use strict';

module.exports = (sequelizeDatabase, DataTypes) => {
  return sequelizeDatabase.define('IceCream', {
    flavor: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
