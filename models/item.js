'use strict';
const {
  Model, BOOLEAN, STRING
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
      Item.belongsTo(models.User, { foreignKey: "userId" });
    }
  };
  Item.init({
    title: DataTypes.STRING,
    issue: DataTypes.INTEGER,
    publicationCoverDate: DataTypes.DATEONLY,
    volume: DataTypes.STRING,
    volumeYear: DataTypes.INTEGER,
    variantCover: DataTypes.STRING,
    typeItem: DataTypes.STRING,
    priceCover: DataTypes.DECIMAL,
    pricePaid: DataTypes.DECIMAL,
    datePaid: DataTypes.DATEONLY,
    condition: DataTypes.STRING,
    valuation: DataTypes.DECIMAL,
    valuationDate: DataTypes.DATEONLY,
    valuationSource: DataTypes.STRING,
    publisher: DataTypes.STRING,
    keyWords: DataTypes.STRING,
    boxNumber: DataTypes.STRING,
    boxDivider: DataTypes.STRING,
    boxLocation: DataTypes.STRING,
    artist1: DataTypes.STRING,
    artist2: DataTypes.STRING,
    writer1: DataTypes.STRING,
    writer2: DataTypes.STRING,
    inker: DataTypes.STRING,
    deleteFlag: DataTypes.BOOLEAN,
    deleteReason: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    lettering: DataTypes.STRING,
    coloring: DataTypes.STRING,
    editor: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Item',
  });
  return Item;
};