const Sequelize = require('sequelize');
require('dotenv').config();

const database = new Sequelize(process.env.DATABASE, process.env.USER_NAME, process.env.PASSWORD, {
  dialect: 'mysql',
  host: 'remotemysql.com',
  define: {
    timestamps: false,
  },
});

module.exports = { database }
