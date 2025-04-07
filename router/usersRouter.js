const express = require("express");
const routerUsuarios = express.Router();

const {
  obtenerUsuarios,
  obtenerUsuariosPorId,
  obtenerUsuarioPorToken,
} = require("../controllers/usersController");
const verificarToken = require("../middlewares/verificarToken");

routerUsuarios.get("/obtenerUsuarios", obtenerUsuarios);
routerUsuarios.get("/obtenerUsuariosPorId/:id", obtenerUsuarios);
routerUsuarios.get("/perfil", verificarToken, obtenerUsuarioPorToken);

module.exports = routerUsuarios;
