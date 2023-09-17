const { Router } = require("express");
const getPrueba = require("../handlers/getPrueba");
const createOrganizer = require("../handlers/organizer/POST/HandlerCreateOrganizer.js");

const routes = Router();
routes.post('/organizer/create', createOrganizer)

routes.get('/', getPrueba)

module.exports = routes;
