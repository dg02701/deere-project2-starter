'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Item.init({
    title: DataTypes.INTEGER,
    issue: DataTypes.INTEGER,
    publicationCoverDate: DataTypes.DATEONLY,
    volume: DataTypes.INTEGER,
    volumneYear: DataTypes.INTEGER,
    variantCover: DataTypes.INTEGER,
    typeItem: DataTypes.STRING,  //monthly, TRADE, reprint, oneshot, variant, main, etc.
    priceCover: DataTypes.DECIMAL,
    pricePaid: DataTypes.DECIMAL,
    datePaid: DataTypes.DATEONLY,
    condition: DataTypes.STRING,
    valuation: DataTypes.DECIMAL,
    valuationDate: DataTypes.DATEONLY,
    valuationSource: DataTypes.STRING,
    publisher: DataTypes.STRING,
    keyWords: DataTypes.STRING,
    boxNumber: DataTypes.STRING, //string due to some using Roman numberals
    boxDivider: DataTypes.STRING, //subdivision of box and might be labled # or name
    boxLocation: DataTypes.STRING,
    artist1: DataTypes.STRING, //required
    artist2: DataTypes.STRING,
    writer1: DataTypes.STRING, //required
    writer2: DataTypes.STRING,
    inker: DataTypes.STRING, //required


  }, {
    sequelize,
    modelName: 'Item',
  });
  return Item;
};