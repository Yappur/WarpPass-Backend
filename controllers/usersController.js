const Usuario = require("../models/usuarioSchema");
const { request, response } = require("express");

const obtenerUsuarios = async (req = request, res = response) => {
  const obtenerUsuarios = await Usuario.find();
  console.log(obtenerUsuarios);
};

module.exports = { obtenerUsuarios };
