// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Dependencies
var Sequelize = require("sequelize");

// Creates mySQL connection using Sequelize with, first: schema name, second is username, third is password
var sequelize = new Sequelize("nmrnlexiy1pqivgu", "jrud3r7anmdsjvmr", "qql03rsn08z0vvtg", {
    host: "kutnpvrhom7lki7u.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    }
  });

  // Exports the connection for other files to use
module.exports = sequelize;
