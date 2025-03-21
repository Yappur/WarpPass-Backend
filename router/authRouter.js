const express = require("express");
const {
  crearUsuario,
  obtenerUsuario,
  loginUsuario,
} = require("../controllers/authController");
const routerAuth = express.Router();

routerAuth.post("/crearUsuario", crearUsuario);
routerAuth.post("/login", loginUsuario);
routerAuth.get("/obtenerUsuario", obtenerUsuario);

module.exports = routerAuth;
