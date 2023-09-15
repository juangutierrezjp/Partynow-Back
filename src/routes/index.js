const { Router } = require("express");
const getPrueba = require("../handlers/getPrueba");

const routes = Router();

routes.get('/', getPrueba)

module.exports = routes;
