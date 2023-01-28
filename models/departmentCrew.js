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
  
    return DepartmentCrew ;
  };