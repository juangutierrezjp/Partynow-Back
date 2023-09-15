const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const routes = require("./routes/index");
require = "./db.js";

const server = express();

server.name = "Api_PartyNow";
server.use(morgan("dev"));
server.use(cors());


server.use("/", routes);

server.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = server;