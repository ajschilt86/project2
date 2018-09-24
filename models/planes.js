module.exports = function(sequelize, DataTypes) {
  var Planes = sequelize.define("Planes", {
    Name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAlphanumeric: true,
        len: [1, 20]
      }
    },
    planeName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    pID: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });
  Planes.associate = function(models) {
    Planes.belongsTo(models.Squadron, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Planes;
};
