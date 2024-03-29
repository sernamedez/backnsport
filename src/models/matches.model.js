const { DataTypes } = require("sequelize");

function model(sequelize) {
  const attributes = {
    tournament: { type: DataTypes.STRING, allowNull: false },
    game: { type: DataTypes.STRING, allowNull: false },
    img: { type: DataTypes.STRING, allowNull: false },
    state: { type: DataTypes.STRING, allowNull: false },
    stream: { type: DataTypes.STRING(1000), allowNull: true },
    stream2: { type: DataTypes.STRING(1000), allowNull: true },
  };

  const options = {
    // Desabilitar timestampo por defecto
    timestamps: false,
  };
  return sequelize.define("matches", attributes, options);
}
module.exports = model;
