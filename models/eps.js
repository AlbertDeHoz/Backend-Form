'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EPS extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  EPS.init({
    code: DataTypes.STRING,
    NIT: DataTypes.STRING,
    administradora: DataTypes.STRING,
    EpsName: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'EPS',
  });
  return EPS;
};