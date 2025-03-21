const express = require("express");
const app = express();
require("dotenv").config();

app.use(express.json());

app.use("/auth", require("./router/authRouter"));

app.listen(process.env.PORT, () => {
  console.log("Server Levantado");
});
