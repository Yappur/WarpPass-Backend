require("dotenv").config();
const dbConnection = require("./database/config");
const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());

app.use(cors());

app.use("/usuarios", require("./router/authRouter"));
app.use("/eventos", require("./router/eventsRouter"));

dbConnection();

app.listen(process.env.PORT, () => {
  console.log("Server Levantado");
});
