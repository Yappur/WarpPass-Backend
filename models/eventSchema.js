const { Schema, model } = require("mongoose");

const EventoSchema = Schema({
  titulo: {
    type: String,
    required: [true, "El nombre es obligatorio"],
    trim: true,
  },
  fecha: {
    type: Date,
    required: [true, "La fecha es obligatoria"],
  },
  hora: {
    type: String,
    required: [true, "La hora es obligatoria"],
  },
  lugar: {
    type: String,
    required: [true, "El lugar es obligatorio"],
  },
  descripcion: {
    type: String,
  },
  imagen: {
    type: String,
  },
  precio: {
    type: Number,
  },
});

module.exports = model("Evento", EventoSchema);
