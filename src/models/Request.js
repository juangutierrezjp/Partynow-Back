const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  sequelize.define('request', {
    id:{                                          
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    type:{                                          
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
  },
  data:{                                          
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
},
  }, {
    timestamps: false,
});
};