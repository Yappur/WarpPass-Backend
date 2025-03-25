const express = require("express");
const routerEvent = express.Router();

const {
  crearEvento,
  obtenerEventos,
  // obtenerEventoPorId,
  editarEvento,
  eliminarEvento,
} = require("../controllers/eventsController");
const verificarToken = require("../middlewares/verificarToken");

routerEvent.post("/crearEvento", verificarToken, crearEvento);
routerEvent.get("/obtenerEventos", obtenerEventos);
// routerEvent.get("/obtenerEventoPorId", obtenerEventoPorId);
routerEvent.put("/editarEvento/:id", verificarToken, editarEvento);
routerEvent.delete("/eliminarEvento/:id", verificarToken, eliminarEvento);

module.exports = routerEvent;
