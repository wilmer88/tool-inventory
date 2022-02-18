module.exports = function (sequelize, DataTypes) {
  const Item = sequelize.define("items", {
    item_name: {
      type: DataTypes.STRING,
    },
    total_count: {
      type: DataTypes.STRING,
    },
  });

  return Item;
};

// const {Sequelize, DataTypes} = require("sequelize");

// const sequelize = require("../config/connection");

// var Tool = sequelize.define("tool", {
//     partName: Sequelize.STRING,
//     department: Sequelize.STRING,
//     count: Sequelize.INTEGER
// })

// Tool.sync();
// module.exports = Tool;
