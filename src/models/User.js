const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  sequelize.define('user', {
     id:{                                          
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    name: {                                      
      type: DataTypes.STRING,
      allowNull: true,   
    },
    image:{                                    
        type:DataTypes.STRING,
        allowNull: true,   
    },
    dni:{                                       
        type: DataTypes.STRING,
        allowNull: true,
    },
    pass:{                                    
        type: DataTypes.STRING,
        allowNull: true,
    },
    email:{                                   
        type: DataTypes.STRING,
        allowNull: true,
    }

  }, {
    timestamps: false,
});
};