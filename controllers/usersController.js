const Usuario = require("../models/usuarioSchema");
const { request, response } = require("express");

const obtenerUsuarios = async (req = request, res = response) => {
  const obtenerUsuarios = await Usuario.find();
  res.status(200).json(obtenerUsuarios);
};

module.exports = { obtenerUsuarios };
