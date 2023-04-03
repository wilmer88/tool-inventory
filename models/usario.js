module.exports = function (sequelize, DataTypes) {
    var Usario = sequelize.define("Usario", {
      email: DataTypes.STRING,
      password: DataTypes.STRING,
    });
    return Usario;
  };