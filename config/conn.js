const mysql = require("mysql");

const connection = mysql.createConnection({
  host: process.env.HOST,
  port: process.env.DB_PORT,
  database: process.env.DATABASE,
  user: process.env.USER,
  password: process.env.PASSWORD,
});

connection.connect(function (err) {
  if (err) {
    return console.log("error occured while connecting ", err.sqlMessage);
  }
  return console.log("connection successfully");
});

const sql = "create database if not exists videoquotes";

connection.query(sql, (err, result) => {
  if (err) {
    return console.log(err.message);
  }
  return "database created";
});

module.exports = connection;
