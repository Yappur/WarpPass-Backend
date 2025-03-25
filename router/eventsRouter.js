const express = require("express");

const {
  crearEvento,
  obtenerEventos,
  // obtenerEventoPorId,
  eliminarEvento,
} = require("../controllers/eventsController");
const routerEvent = express.Router();

routerEvent.post("/crearEvento", crearEvento);
routerEvent.get("/obtenerEventos", obtenerEventos);
// routerEvent.get("/obtenerEventoPorId", obtenerEventoPorId);
routerEvent.delete("/eliminarEvento/:id", eliminarEvento);

module.exports = routerEvent;
