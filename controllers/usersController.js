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

const cambiarRolUsuario = async (req = request, res = response) => {
  const { id } = req.params;
  const { rol } = req.body;
  try {
    const usuario = await Usuario.findById(id);

    if (!usuario) {
      return res.status(400).json({ msg: "Usuario no encontrado con este ID" });
    }

    if (!["usuario", "productor", "admin"].includes(rol)) {
      return res.status(400).json({ msg: "Rol no válido" });
    }

    usuario.rol = rol;
    await usuario.save();

    res.status(200).json({ msg: "Rol actualizado", usuario });
  } catch (error) {
    res.status(500).json({ msg: "Por favor contactarse con un administrador" });
  }
};

const eliminarUsuario = async (req = request, res = response) => {
  try {
    const usuarioEliminar = await Usuario.findById(req.params.id);
    if (!usuarioEliminar) {
      return res.status(400).json({ msg: "Usuario no encontrado con este ID" });
    }
    await Usuario.findByIdAndDelete(req.params.id);
    res.status(200).json({ msg: "Usuario Eliminado" });
  } catch (error) {
    res.status(500).json({ msg: "Por favor contactarse con un administrador" });
  }
};

module.exports = {
  obtenerUsuarios,
  obtenerUsuariosPorId,
  obtenerUsuarioPorToken,
  cambiarRolUsuario,
  eliminarUsuario,
};
