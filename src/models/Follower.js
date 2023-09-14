const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  sequelize.define('followe', {
    id:{                                          
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    
  }, {
    timestamps: false,
});
};