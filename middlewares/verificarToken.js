var jwt = require("jsonwebtoken");

const verificarToken = (req, res, next) => {
  const token = req.header("x-token");

  if (!token) {
    return res.status(401).json({
      msg: "Acceso denegado. Token no proporcionado.",
    });
  }

  try {
    const payload = jwt.verify(token, process.env.SECRET_KEY);
  } catch (error) {
    return res.status(401).json({
      msg: "Token no válido",
    });
  }

  next();
};

module.exports = verificarToken;
