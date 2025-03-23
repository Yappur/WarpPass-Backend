const express = require("express");

const {
  crearEvento,
  obtenerEventos,
  obtenerEventoPorId,
} = require("../controllers/eventsController");
const routerEvent = express.Router();

routerAuth.post("/crearEvento", crearUsuario);
routerAuth.get("/obtenerEventos", loginUsuario);
routerAuth.get("/obtenerEventoPorId", obtenerUsuario);

module.exports = routerEvent;
