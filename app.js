require("dotenv").config();
const dbConnection = require("./database/config");
const express = require("express");

const app = express();

app.use(express.json());

app.use("/usuarios", require("./router/authRouter"));

dbConnection();

app.listen(process.env.PORT, () => {
  console.log("Server Levantado");
});
