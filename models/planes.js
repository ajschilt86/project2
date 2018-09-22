module.exports = function(sequelize, DataTypes) {
  var Planes = sequelize.define("Planes", {
    Name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAlpha: true,
        len: [1, 20]
      }
    },
    planeName: {
      type: DataTypes.STRING,
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
