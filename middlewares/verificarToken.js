var jwt = require("jsonwebtoken");

const verificarToken = (req, res, next) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");

  if (!token) {
    return res.status(401).json({
      msg: "Acceso denegado. Token no proporcionado.",
    });
  }

  try {
    const payload = jwt.verify(token, process.env.SECRET_KEY);

    req.usuario = payload;
    next();
  } catch (error) {
    return res.status(401).json({
      msg: "Token no válido",
    });
  }
};

module.exports = verificarToken;
