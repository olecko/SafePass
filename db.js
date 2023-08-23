const mysql = require('mysql2');
const dbConfig = require('./db.config.js');

// Create a MySQL connection pool
const connection = mysql.createPool({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB,
});

module.exports = connection.promise();

