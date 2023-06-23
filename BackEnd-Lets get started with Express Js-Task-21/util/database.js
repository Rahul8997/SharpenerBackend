const Sequelize = require('sequelize');

const sequelize = new Sequelize('nodecomplete', 'root', 'Fzopp@8997e', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
