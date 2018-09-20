var Sequelize = require("sequelize");
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
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
    },
    Unit1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "F-35"
    },
    Unit2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "F-35"
    },
    Unit3: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "F-35"
    },
    Unit4: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "F-35"
    },
    Unit5: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "F-35"
    },
    Unit6: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "F-35"
    },
    Unit7: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "F-35"
    },
    Unit8: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "F-35"
    },
    Unit9: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "F-35"
    },
    Unit10: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "F-35"
    }
  });
  return User;
};
