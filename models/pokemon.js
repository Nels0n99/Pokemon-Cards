'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pokemon extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Pokemon.init({
    class: DataTypes.STRING,
    name: DataTypes.STRING,
    hp: DataTypes.STRING,
    icon: DataTypes.STRING,
    image: DataTypes.STRING,
    secondicon: DataTypes.STRING,
    move: DataTypes.STRING,
    damage: DataTypes.STRING,
    thirdicon: DataTypes.STRING,
    fourthicon: DataTypes.STRING,
    secondmove: DataTypes.STRING,
    seconddamage: DataTypes.STRING,
    weakness: DataTypes.STRING,
    resistance: DataTypes.STRING,
    retreat: DataTypes.STRING,
    weaknessicon: DataTypes.STRING,
    weaknessamount: DataTypes.STRING,
    resistanceicon: DataTypes.STRING,
    retreaticon: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Pokemon',
    tableName: 'pokemons',
    timestamps:false
  });
  return Pokemon;
};