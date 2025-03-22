const Usuario = require("../models/usuarioSchema");
const { request, response } = require("express");

const crearUsuario = async (req = request, res = response) => {
  const { nombre, email, contrasenia } = req.body;

  if (!nombre || !email || !contrasenia) {
    return res.status(400).json({ msg: "Todos los campos son obligatorios" });
  }
  try {
    let usuario = await Usuario.findOne({ email });
    if (usuario) {
      return res.status(400).json({ msg: "El correo ya esta registrado " });
    }

    usuario = new Usuario(req.body);

    await usuario.save();

    res.status(201).json({ msg: "Usuario Creado" });
  } catch (error) {
    console.log(error);
  }
};

const obtenerUsuario = (req = request, res = response) => {
  res.send("Usuario Obtenido");
};

const loginUsuario = (req = request, res = response) => {
  res.json({ modal: "success", msg: "Usuario Logueado" });
};

module.exports = { crearUsuario, obtenerUsuario, loginUsuario };
