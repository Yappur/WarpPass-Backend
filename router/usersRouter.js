const express = require("express");
const routerUsuarios = express.Router();

const { obtenerUsuarios } = require("../controllers/usersController");

routerUsuarios.get("/obtenerUsuarios", obtenerUsuarios);

module.exports = routerUsuarios;
