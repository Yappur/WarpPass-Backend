const express = require("express");

const { crearUsuario, loginUsuario } = require("../controllers/authController");
const routerAuth = express.Router();

routerAuth.post("/crearUsuario", crearUsuario);
routerAuth.post("/login", loginUsuario);

module.exports = routerAuth;
