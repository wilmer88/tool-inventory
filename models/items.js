module.exports = function (sequelize, DataTypes) {
    const Item = sequelize.define("Item", {
      name: {
        type: DataTypes.STRING,
      },

      placement: {
        type: DataTypes.STRING,
      },
     serial: {
        type: DataTypes.STRING,
      },
      count: {
        type: DataTypes.INTEGER,
      },
      countedBy: {
        type: DataTypes.STRING,
      },
      routeName:{
        type: DataTypes.STRING,
      }

    });
    Item .associate = function(models) {
      // We're saying that a Post should belong to an 
      // A Item can't be created without an departmentCrew due to the foreign key constraint
      Item .belongsTo(models.DepartmentCrew, {
        foreignKey: {
          
        }
      })
    }
  
    return Item;
  };