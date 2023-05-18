'use strict';

module.exports = (sequelizeDatabase, DataTypes) => {
  return sequelizeDatabase.define('ice-creams', {
    flavor: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });
};
