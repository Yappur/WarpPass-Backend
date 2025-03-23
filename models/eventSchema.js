const { Schema, model } = require("mongoose");

const EventoSchema = Schema({
  titulo: {
    type: String,
    required: [true, "El nombre es obligatorio"],
    trim: true,
  },
  descripcion: {
    type: String,
    required: [true, "La descripcion es obligatoria"],
  },
  lugar: {
    type: String,
    required: [true, "El lugar es obligatorio"],
  },
  precio: {
    type: Number,
    required: [true, "El precio es obligatorio"],
  },
  cantidad: {
    type: Number,
    required: [true, "La Cantidad es obligatoria"],
  },
  fecha: {
    type: Date,
    // required: [true, "La fecha es obligatoria"],
  },
  hora: {
    type: String,
    // required: [true, "La hora es obligatoria"],
  },
  imagen: {
    type: String,
  },
});

module.exports = model("Evento", EventoSchema);
