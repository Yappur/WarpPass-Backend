const express = require("express");

const { obtenerUsuarios } = require("../controllers/usersController");
const routerUsuarios = express.Router();

routerUsuarios.get("/obtenerUsuarios", obtenerUsuarios);

module.exports = routerUsuarios;
