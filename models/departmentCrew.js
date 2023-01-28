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
      totalItems: {
        type: DataTypes.INTEGER,
      },
      routeName:{
        type: DataTypes.STRING,
      }
    });
  
    return Item;
  };