var Sequelize = require("sequelize");
module.exports = function(sequelize, DataTypes) {
  var Squadron = sequelize.define("Squadron", {
    UID: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    Name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAlpha: true,
        len: [1, 50]
      }
    }
  });
  return Squadron;
};

Squadron.associate(function(models) {
  Squadron.hasMany(models.Planes);
});
