const mysql = require('mysql2');
const { Sequelize } = require('sequelize');
require('dotenv').config();

const db = new Sequelize({
  dialect: 'mysql',
  host: process.env.MYSQL_HOST,
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_SAFEPASS_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  define: {
    timestamps: false, // Disable automatic timestamp fields
  },
  pool: {
    max: 5, // Maximum number of database connections in the pool
    min: 0, // Minimum number of database connections in the pool
    acquire: 30000, // Maximum time, in milliseconds, that pool will try to get connection before throwing error
    idle: 10000, // Maximum time, in milliseconds, that a connection can be idle before being released
  },
  logging: false, // Disable logging of SQL queries
});

module.exports = db;

