
module.exports = function (sequelize, DataTypes) {
    const Item = sequelize.define("Item", {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },

      itemName: DataTypes.STRING,
      placement: {
        type: DataTypes.TEXT,
        allowNull: false,
        len: [1]
      },
      serial: DataTypes.STRING,
      count: DataTypes.INTEGER,
      countedBy: DataTypes.STRING,
      routeName: {
      // primaryKey: true,
      allowNull: false,
      type: DataTypes.STRING,
       
      },
      
      });
     
    Item.associate = function(models) {
     Item.belongsTo(models.Department,{
      foreignKey:{allowNull: false,
       }});
    };
    return Item;
  };

//   {
//     "DepartmentDepartmentName": "Dig Crew",
//     "itemName": "hose",
//     "placement": "trailer",
//     "serial": 743567,
//     "count": 20,
//     "countedBy": "daddypop",
//     "routeName": "Dig Crew"
// }








// {
//   associate: function(models){
//   Item.belongsTo(models.Department,{ foreignKey:"name"})
// }
// }