const { Schema, model } = require("mongoose");
const findOrCreate = require("mongoose-findorcreate");

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
    required: function () {
      return !this.googleId;
    },
  },
  googleId: {
    type: String,
    unique: true,
    sparse: true,
  },
  rol: {
    type: String,
    default: "usuario",
    enum: ["usuario", "productor", "admin"],
  },
});

UsuarioSchema.plugin(findOrCreate);

module.exports = model("Usuario", UsuarioSchema);
