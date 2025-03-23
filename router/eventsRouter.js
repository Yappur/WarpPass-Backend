const express = require("express");

const {
  crearEvento,
  // obtenerEventos,
  // obtenerEventoPorId,
} = require("../controllers/eventsController");
const routerEvent = express.Router();

routerEvent.post("/crearEvento", crearEvento);
// routerEvent.get("/obtenerEventos", obtenerEventos);
// routerEvent.get("/obtenerEventoPorId", obtenerEventoPorId);

module.exports = routerEvent;
