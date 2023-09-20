const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('ticket', {
    id:{                                        
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    qr: {                                      
      type: DataTypes.STRING,
      allowNull: false,   
    },
    date:{                                      
        type:DataTypes.STRING,
        allowNull: true,   
    },
    status:{                                      
      type:DataTypes.STRING,
      allowNull: true,   
  }
  }, {
    timestamps: false,
});
};