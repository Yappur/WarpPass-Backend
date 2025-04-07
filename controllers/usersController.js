const Usuario = require("../models/usuarioSchema");
const { request, response } = require("express");

const obtenerUsuarios = async (req = request, res = response) => {
  const obtenerUsuarios = await Usuario.find();
  res.status(200).json(obtenerUsuarios);
};

const obtenerUsuariosPorId = async (req = request, res = response) => {
  try {
    const obtenerUsuariosPorId = await Usuario.findById(req.params.id);

    if (!obtenerUsuariosPorId) {
      return res.status(400).json({ msg: "Usuario no encontrado con este ID" });
    }

    res.status(200).json(obtenerUsuariosPorId);
  } catch (error) {
    res.status(500).json({ msg: "Por favor contactarse con un administrador" });
  }
};

const obtenerUsuarioPorToken = async (req = request, res = response) => {
  try {
    const usuarioId = req.usuario.id;

    const usuario = await Usuario.findById(usuarioId);

    if (!usuario) {
      return res.status(400).json({ msg: "Usuario no encontrado con este ID" });
    }
    res.status(200).json(usuario);
  } catch (error) {
    res.status(500).json({ msg: "Por favor contactarse con un administrador" });
  }
};

module.exports = {
  obtenerUsuarios,
  obtenerUsuariosPorId,
  obtenerUsuarioPorToken,
};
