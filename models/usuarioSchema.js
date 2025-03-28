const { Schema, model } = require("mongoose");

const UsuarioSchema = Schema({
  nombre: {
    type: String,
    required: [true, "El nombre es obligatorio"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "El email es obligatorio"],
    unique: true,
    trim: true,
  },
  contrasenia: {
    type: String,
    required: [true, "La contraseña es obligatoria"],
  },
  rol: {
    type: String,
    default: "usuario",
    enum: ["usuario", "productor", "admin"],
  },
});

module.exports = model("Usuario", UsuarioSchema);
