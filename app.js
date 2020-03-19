const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
const PORT = 8081;
const user = require("./routes/user");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Rotas
app.use("/user", user);

app.listen(PORT, () => {
  console.log("Servidor rodando na porta " + PORT);
});
