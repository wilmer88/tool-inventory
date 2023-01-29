module.exports = function (sequelize, DataTypes) {
    const DepartmentCrew = sequelize.define("DepartmentCrew", {
      departmentCrewName: {
        type: DataTypes.STRING,
      },
      supervisor: {
        type: DataTypes.STRING,
      },
     lead: {
        type: DataTypes.STRING,
      },
      routeName:{
        type: DataTypes.STRING,
      }
    });
    DepartmentCrew.associate = function(models) {
      // Associating Author with Posts
      // When an Author is deleted, also delete any associated Posts
      DepartmentCrew.hasMany(models.Item, {
        onDelete: "cascade"
      });
    };
  
    return DepartmentCrew ;
  };