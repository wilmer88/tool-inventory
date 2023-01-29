module.exports = function (sequelize, DataTypes) {
    const Item = sequelize.define("Item", {
      name: DataTypes.STRING,
      placement: DataTypes.STRING,
      serial: DataTypes.STRING,
      count: DataTypes.INTEGER,
      countedBy: DataTypes.STRING,
      routeName:DataTypes.STRING,
      });

      
  Item.associate = function(models) {

    Item.belongsTo(models.Department, {
      foreignKey: {
        allowNull: false
      }
      
    });
};

    return Item;
  };








// {
//   associate: function(models){
//   Item.belongsTo(models.Department,{ foreignKey:"name"})
// }
// }