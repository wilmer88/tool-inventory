const items = require("./items");

module.exports = function (sequelize, DataTypes) {
    const Department= sequelize.define("Department", {

      name: {
        primaryKey:true,
        type: DataTypes.STRING,
      },
      supervisor: {
        type: DataTypes.STRING,
      },
     lead: {
        type: DataTypes.STRING,
      },
      routeName: {
        primaryKey:true,
        type: DataTypes.STRING,
      },
 
    });
    Department.associate = function(models) {
      // Associating Author with Posts
      // When an Author is deleted, also delete any associated Posts
      Department.hasMany(models.Item,{onDelete: "cascade"});
    };
  
    return Department;
  };




  // Department.associate = function(models) {
  //   // Associating Author with Posts
  //   // When an Author is deleted, also delete any associated Posts
  //   Department.hasMany(models.Item, {
  //     as: "items",
  //     onDelete: "cascade"
  //   });
  // };