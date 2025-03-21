const express = require("express");
const app = express();
require("dotenv").config();

app.use(express.json());

app.get("/obtenerUsuario", (req, res) => {
  const { nombre, precio } = req.body;
  console.log(nombre);
  res.send("Mateo");
});

app.listen(process.env.PORT, () => {
  console.log("Server Levantado");
});
