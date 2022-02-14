// module.exports = function (sequlize, DatTypes) {
//   var tools = sequlize.define("tools", {
//     routeName: DataTypes.STRING,
//     name: DataTypes.STRING,
//     assignedTo: DataTypes.STRING,
//     placement: DataTypes.STRING,
//     location: DataTypes.STRING,
//   });
//   return tools;
// };

// // Dependencies
// // =============================================================
// // Sequelize (capital) references the standard library
// var Sequelize = require("sequelize");
// // sequelize (lowercase) references our connection to the DB.
// var sequelize = require("../config/connection.js");
// // Creates a "Character" model that matches up with DB
// var Tool = sequelize.define(
//   "tool",
//   {
//     // the routeName gets saved as a string
//     routeName: Sequelize.STRING,
//     // the name of the tool (a string)
//     name: Sequelize.STRING,
//     // company/person assigned to (a string)
//     assignedTo: Sequelize.STRING,
//     // place where the tool is stored (a string)
//     placement: Sequelize.STRING,
//     // exact location where the tool is stored (a string)
//     location: Sequelize.STRING,
//   },
//   // disable the modification of tablenames; By default, sequelize will automatically
//   // transform all passed model names (first parameter of define) into plural.
//   // if you don't want that, set the following
//   { freezeTable: true }
// );
// // Syncs with DB
// Tool.sync();

// // Makes the Character Model available for other files (will also create a table)
// module.exports = Tool;
