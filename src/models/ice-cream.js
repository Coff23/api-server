'use strict';

module.exports = (sequelizeDatabase, DataTypes) => {
  return sequelizeDatabase.define('ice-cream', {
    flavor: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
