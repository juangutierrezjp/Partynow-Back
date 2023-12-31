const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  sequelize.define('event', {
    id:{                                          
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    name: {                                       
      type: DataTypes.STRING,
      allowNull: true,   
    },
    hour:{                                      
        type:DataTypes.STRING,
        allowNull: true,   
    },
    link:{                                      
        type: DataTypes.STRING,
        allowNull: true,
    },
    location:{                                    
        type: DataTypes.STRING,
        allowNull: true,
    },
    date:{                                   
        type: DataTypes.STRING,
        allowNull: true,
    },
    refund:{
        type: DataTypes.BOOLEAN,
    },
    capacitance:{
        type: DataTypes.FLOAT,
    },
    iterativo:{
        type: DataTypes.BOOLEAN,
    },
    video:{
        type: DataTypes.STRING,
        allowNull: true,
    },
    photo:{
        type: DataTypes.STRING,
        allowNull: true,
    },
    status:{
        type: DataTypes.STRING,
        allowNull: true,
    },
    

  }, {
    timestamps: false,
});
};