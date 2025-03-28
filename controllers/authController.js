const Usuario = require("../models/usuarioSchema");
const { request, response } = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

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

    const salt = bcrypt.genSaltSync(10);
    usuario.contrasenia = bcrypt.hashSync(contrasenia, salt);

    await usuario.save();

    res.status(201).json({ msg: "Usuario Creado" });
  } catch (error) {
    console.log(error);
  }
};

const loginUsuario = async (req = request, res = response) => {
  const { email, contrasenia } = req.body;

  if (!email || !contrasenia) {
    return res.status(400).json({ msg: "Todos los campos son obligatorios" });
  }

  try {
    let usuario = await Usuario.findOne({ email });
    if (!usuario) {
      return res.status(400).json({
        msg: "Correo o contraseña no son correctos",
      });
    }

    const validPassword = bcrypt.compareSync(contrasenia, usuario.contrasenia);
    if (!validPassword) {
      return res.status(400).json({
        msg: "Correo o contraseña no son correctos",
      });
    }

    const payload = {
      nombre: usuario.nombre,
      email: usuario.email,
      id: usuario._id,
      rol: usuario.rol,
    };

    const token = jwt.sign(payload, process.env.SECRET_KEY, {
      expiresIn: "12h",
    });

    res.status(200).json({ msg: "Sesion Iniciada", token, rol: payload.rol });
  } catch (error) {
    res.status(500).json({ msg: "Error al iniciar sesion" });
  }
};

module.exports = { crearUsuario, loginUsuario };
