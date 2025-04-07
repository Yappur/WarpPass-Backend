const express = require("express");
const routerUsuarios = express.Router();

const {
  obtenerUsuarios,
  obtenerUsuariosPorId,
  obtenerUsuarioPorToken,
  eliminarUsuario,
} = require("../controllers/usersController");
const verificarToken = require("../middlewares/verificarToken");

routerUsuarios.get("/obtenerUsuarios", obtenerUsuarios);
routerUsuarios.get("/obtenerUsuariosPorId/:id", obtenerUsuariosPorId);
routerUsuarios.get("/perfil", verificarToken, obtenerUsuarioPorToken);
routerUsuarios.delete("/eliminarUsuario/:id", verificarToken, eliminarUsuario);

module.exports = routerUsuarios;
