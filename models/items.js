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
    });
  
    return Item;
  };
  