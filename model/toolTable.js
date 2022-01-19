// Dependencies
// =============================================================
// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");

var sequelize = require("../config/connection.js");

var Tool = sequelize.define("tool",{
    routeName: Sequelize.STRING,
    name: Sequelize.STRING,
    assigneTo: Sequelize.STRING,
    placement: Sequelize.STRING,


})