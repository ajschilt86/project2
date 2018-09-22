var Sequelize = require("sequelize");
module.exports = function(sequelize, DataTypes) {
  var Plane = sequelize.define("Plane", {
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
        len: [1, 20]
      }
    },
    Health: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Attack: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isNumeric: true
      }
    },
    Evasion: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isNumeric: true
      }
    },
    Critical: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isNumeric: true
      }
    }
  });
  return Plane;
};
