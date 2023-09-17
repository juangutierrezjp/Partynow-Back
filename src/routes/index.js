const { Router } = require("express");
const getPrueba = require("../handlers/getPrueba");
const createOrganizer = require("../handlers/organizer/POST/HandlerCreateOrganizer.js");
const HandlerDataUpload = require("../handlers/upload/HandlerDataUpload");

const routes = Router();

routes.post('/organizer/create', createOrganizer)
routes.get('/', getPrueba);
routes.post('/upload', HandlerDataUpload );

module.exports = routes;
