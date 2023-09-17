const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('organizer', {
    id:{                                        
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    email: {                                      
      type: DataTypes.STRING,
      allowNull: false,   
    },
    networks:{                                      
        type:DataTypes.STRING,
        allowNull: true,   
    },
    rol:{                                      
        type:DataTypes.STRING,
        allowNull: true,   
    },
    name:{                                      
        type:DataTypes.STRING,
        allowNull: true,   
    },
    verified:{                                      
        type:DataTypes.STRING,
        allowNull: true,   
    },
    password:{                                      
        type:DataTypes.STRING,
        allowNull: true,   
    },
    cuil:{                                      
        type:DataTypes.STRING,
        allowNull: true,   
    },
    numberfollowers:{                                      
        type:DataTypes.INTEGER,
        allowNull: true,   
    },
    photo:{                                      
        type:DataTypes.STRING,
        allowNull: true,   
    },
    phone:{                                      
        type:DataTypes.STRING,
        allowNull: true,   
    }
  }, {
    timestamps: false,
});
};