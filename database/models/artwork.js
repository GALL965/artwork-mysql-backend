'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Artwork extends Model {
    static associate(models) {
      // asociaciones futuras
    }
  }

  Artwork.init({
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    year: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    imageUrl: DataTypes.STRING  // 👈 nueva columna para la imagen
  }, {
    sequelize,
    modelName: 'Artwork',
  });

  return Artwork;
};
