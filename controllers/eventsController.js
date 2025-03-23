const Evento = require("../models/eventSchema");
const { request, response } = require("express");

const crearEvento = async (req = request, res = response) => {
  const { titulo, fecha, hora, lugar, descripcion, imagen, precio, cantidad } =
    req.body;

  try {
    if (!titulo || !descripcion || !precio || !cantidad || !lugar) {
      return res.status(400).json({ msg: "Todos los campos son obligatorios" });
    }

    let evento = new Evento(req.body);

    await evento.save();

    res.status(201).json({ msg: "Evento Creado" });
  } catch (error) {
    res.status(500).json({ msg: "Error al crear el evento" });
  }
};

module.exports = { crearEvento };
