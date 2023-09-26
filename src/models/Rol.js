const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "rol",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      type: {
        type: DataTypes.ENUM(
          "clients",
          "organizer",
          "security",
          "cashier",
          "god",
          "security/cashier"
        ),
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
};
