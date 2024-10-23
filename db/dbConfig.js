const mysql2 = require("mysql2");
const dbConnection = mysql2.createPool({
  user: process.env.DB_USERNAME,
  database: process.env.DATABASE_NAME,
  host: process.env.DB_HOST,
  password: process.env.DB_PASSWORD,
  connectionLimit: 10,
});

module.exports = dbConnection.promise()
