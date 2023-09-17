require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const sequelize = new Sequelize(
   `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/partynow`,
   {
      logging: false, // set to console.log to see the raw SQL queries
      native: false, // lets Sequelize know we can use pg-native for ~30% more speed
   }
);
const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, '/models'))
   .filter(
      (file) =>
         file.indexOf('.') !== 0 &&
         file !== basename &&
         file.slice(-3) === '.js'
   )
   .forEach((file) => {
      modelDefiners.push(require(path.join(__dirname, '/models', file)));
   });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach((model) => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
   entry[0][0].toUpperCase() + entry[0].slice(1),
   entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring




/////// ACA IMPORTAMOS LOS MODELOS /////// JuanPa
const {
   Assigned,
   Establishment,
   Event,
   Follower,
   Organizer,
   Pv,
   Review,
   Series,
   Ticket,
   User,

} = sequelize.models


/////// ACA VIENEN LAS RELACIONES /////// JuanPa


// Pv con Asignado
Pv.hasMany(Assigned);
Assigned.belongsTo(Pv);

// Pv con Ticket
Pv.hasMany(Ticket);
Ticket.belongsTo(Pv);

// Organizador con Establecimiento
Organizer.hasMany(Establishment);
Establishment.belongsTo(Organizer);

// Organizador con Evento
Organizer.hasMany(Event);
Event.belongsTo(Organizer);

// Organizacion con Seguidor
Organizer.hasMany(Follower);
Follower.belongsTo(Organizer); 

// Evento con Tanda
Event.hasMany(Series);
Series.belongsTo(Event);

// Evento con Ticket 
Event.hasMany(Ticket);
Ticket.belongsTo(Event);

// Evento con Review
Event.hasMany(Review);
Review.belongsTo(Event);

// Evento con Asignado
Event.hasMany(Assigned);
Assigned.belongsTo(Event);

// Usuario con Ticket
User.hasMany(Ticket);
Ticket.belongsTo(User);

// Usuario con Seguidor
User.hasMany(Follower);
Follower.belongsTo(User);

// Usuario con Review
User.hasMany(Review);
Review.belongsTo(User); 


module.exports = {
   ...sequelize.models, 
   conn: sequelize, 
};