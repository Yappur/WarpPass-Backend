const express = require("express");
const routerAuth = express.Router();

const { crearUsuario, loginUsuario } = require("../controllers/authController");

routerAuth.post("/crearUsuario", crearUsuario);
routerAuth.post("/login", loginUsuario);

module.exports = routerAuth;
