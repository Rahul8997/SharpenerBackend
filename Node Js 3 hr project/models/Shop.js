const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Shop = sequelize.define('shop', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  Candyname: Sequelize.STRING,
  Description: {
    type: Sequelize.STRING,
    allowNull: false
  },
  Price: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  Quantity: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = Shop;