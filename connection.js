// const mysql = require('mysql');
const Sequelize = require('sequelize');
require('dotenv').config();

// Configuration for GCP MySQL connection
// const config = {
//   user: process.env.DB_USER,
//   password: process.env.DB_PASS,
//   database: process.env.DB_NAME,
//   socketPath: `/cloudsql/${process.env.INSTANCE_CONNECTION_NAME}`
// };
// const connection = mysql.createConnection(config);

//localhost MYSQL connection
// var connection = mysql.createConnection({
//     port: process.env.DB_PORT,
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASS,
//     database: process.env.DB_NAME
// });

// connection.connect((err) => {
//     if (!err){
//         console.log("Database is connected");
//     }
//     else{
//         console.log("Error while connecting with database", err);
//     }
// });

let connection;

connection = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
        host: process.env.DB_HOST,
        dialect: 'mysql',
        port: process.env.DB_PORT,
    }
)

module.exports = connection;
