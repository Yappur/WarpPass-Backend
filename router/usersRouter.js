const express = require("express");
const routerUsuarios = express.Router();

const {
  obtenerUsuarios,
  obtenerUsuariosPorId,
  obtenerUsuarioPorToken,
  cambiarRolUsuario,
  eliminarUsuario,
} = require("../controllers/usersController");
const verificarToken = require("../middlewares/verificarToken");

routerUsuarios.get("/obtenerUsuarios", obtenerUsuarios);
routerUsuarios.get("/obtenerUsuariosPorId/:id", obtenerUsuariosPorId);
routerUsuarios.get("/perfil", verificarToken, obtenerUsuarioPorToken);
routerUsuarios.put("/cambiarRol/:id", verificarToken, cambiarRolUsuario);
routerUsuarios.delete("/eliminarUsuario/:id", verificarToken, eliminarUsuario);

module.exports = routerUsuarios;
