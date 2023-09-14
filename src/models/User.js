const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('user', {
    id:{                                          // ID
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    name: {                                       //NOMBRE
      type: DataTypes.STRING,
      allowNull: true,   // ¿Permito que sea nulo? NOO
    },
    image:{                                      //IMAGEN
        type:DataTypes.STRING,
        allowNull: true,   // ¿Permito que sea nulo? SI, puede ser
    },
    dni:{                                       //VIDA
        type: DataTypes.STRING,
        allowNull: true,
    },
    pass:{                                    //ATAQUE
        type: DataTypes.STRING,
        allowNull: true,
    },
    email:{                                   //DEFENSA
        type: DataTypes.STRING,
        allowNull: true,
    }

  }, {
    timestamps: false,
});
};