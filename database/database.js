const Sequelize = require('sequelize');

//TODO ::: sequelize --> database

const database = new Sequelize('09OhAjwTap', '09OhAjwTap', '8IxnrlpJPw', {
  dialect: 'mysql',
  host: 'remotemysql.com',
  define: {
    timestamps: false,
  },
});

module.exports = { database }
