const crearUsuario = (req, res) => {
  res.send("Usuario Creado");
};

const obtenerUsuario = (req, res) => {
  res.send("Usuario Obtenido");
};

const loginUsuario = (req, res) => {
  res.json({ modal: "success", msg: "Usuario Logueado" });
};

module.exports = { crearUsuario, obtenerUsuario, loginUsuario };
