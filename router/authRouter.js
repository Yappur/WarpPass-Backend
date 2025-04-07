const express = require("express");
const routerAuth = express.Router();
const passport = require("passport");
const jwt = require("jsonwebtoken");

const { crearUsuario, loginUsuario } = require("../controllers/authController");

routerAuth.post("/crearUsuario", crearUsuario);
routerAuth.post("/login", loginUsuario);

routerAuth.get(
  "/google",
  passport.authenticate("google", { scope: ["email", "profile"] })
);

routerAuth.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "http://localhost:5173/login",
  }),
  (req, res) => {
    const payload = {
      nombre: req.user.nombre,
      email: req.user.email,
      id: req.user._id,
      rol: req.user.rol,
    };

    const token = jwt.sign(payload, process.env.SECRET_KEY, {
      expiresIn: "12h",
    });

    res.redirect(`http://localhost:5173/auth/google?token=${token}`);
  }
);

module.exports = routerAuth;
