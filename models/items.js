
module.exports = function (sequelize, DataTypes) {
    const Item = sequelize.define("Item", {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: false
      },
      name: DataTypes.STRING,
      placement: DataTypes.STRING,
      serial: DataTypes.STRING,
      count: DataTypes.INTEGER,
      countedBy: DataTypes.STRING,
      routeName: {
        primaryKey:true,
        type: DataTypes.STRING,
      },
      });

      
  Item.associate = function(models) {

    Item.belongsTo(models.Department, {
    
      
    });
};

    return Item;
  };








// {
//   associate: function(models){
//   Item.belongsTo(models.Department,{ foreignKey:"name"})
// }
// }