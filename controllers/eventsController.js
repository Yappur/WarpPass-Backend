const Evento = require("../models/eventSchema");
const { request, response } = require("express");

const crearEvento = async (req = request, res = response) => {
  const { titulo, fecha, hora, lugar, descripcion, imagen, precio, cantidad } =
    req.body;

  try {
    if (
      !titulo ||
      !descripcion ||
      precio === undefined ||
      cantidad === undefined ||
      !lugar ||
      !imagen ||
      !fecha ||
      !hora
    ) {
      return res.status(400).json({ msg: "Todos los campos son obligatorios" });
    }

    if (cantidad <= 0 || precio <= 0) {
      return res
        .status(400)
        .json({ msg: "Precio o Cantidad ingresados incorrectamente" });
    }

    const evento = new Evento(req.body);

    await evento.save();

    res.status(201).json({ msg: "Evento Creado" });
  } catch (error) {
    res.status(500).json({ msg: "Por favor contactarse con un administrador" });
  }
};

const obtenerEventos = async (req = request, res = response) => {
  try {
    const obtenerEventos = await Evento.find();
    res.status(200).json(obtenerEventos);
  } catch (error) {
    res.status(500).json({ msg: "Por favor contactarse con un administrador" });
  }
};

const editarEvento = async (req = request, res = response) => {
  try {
    const eventoEditar = await Evento.findById(req.body.id);

    if (!eventoEditar) {
      return res.status(400).json({ msg: "Evento no encontrado con este ID" });
    }

    await Evento.findByIdAndUpdate(req.body.id, req.body);
    res.status(200).json({ msg: "Evento Editado" });
  } catch (error) {
    res.status(500).json({ msg: "Por favor contactarse con un administrador" });
  }
};

const eliminarEvento = async (req = request, res = response) => {
  try {
    const eventoEliminar = await Evento.findById(req.params.id);
    if (!eventoEliminar) {
      return res.status(400).json({ msg: "Evento no encontrado con este ID" });
    }

    await Evento.findByIdAndDelete(req.params.id);
    res.status(200).json({ msg: "Evento Eliminado" });
  } catch (error) {
    res.status(500).json({ msg: "Por favor contactarse con un administrador" });
  }
};

module.exports = { crearEvento, obtenerEventos, editarEvento, eliminarEvento };
