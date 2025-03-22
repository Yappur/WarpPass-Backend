const express = require("express");
const dbConnection = require("./router/database/config");
const app = express();
require("dotenv").config();

app.use(express.json());

app.use("/auth", require("./router/authRouter"));

dbConnection();

app.listen(process.env.PORT, () => {
  console.log("Server Levantado");
});
