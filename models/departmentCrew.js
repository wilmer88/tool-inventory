// const items = require("./items");
const items = require("./items");


module.exports = function (sequelize, DataTypes) {
    const Department= sequelize.define("Department", {

      departmentName: {
        // primaryKey:true,
        type: DataTypes.STRING,
      },
      supervisor: {
        type: DataTypes.STRING,
      },
     lead: {
        type: DataTypes.STRING,
      },
      routeName: {
        ////////////try key here too
        // primaryKey:true,
        type: DataTypes.STRING,
        len: [1],
      },
 
    });
    Department.associate = function(models) {
      // Associating Department with Items
      // When an Author is deleted, also delete any associated Posts
      Department.hasMany(models.Item,{onDelete: "cascade"});
      // Department.hasMany(models.Item,{as: "items", onDelete: "cascade",});
     


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