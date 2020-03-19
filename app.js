const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = 8081;
const user = require("./routes/user");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Por padrão, a biblioteca cors permitirá solicitações de qualquer origem.
// Isso pode abrir para problemas de segurança e abuso.
// Para uso em produção, é melhor não permitir todas as origens.
// Em vez disso, pode-se criar uma lista de permissões de domínios permitidos
// e verificar cada solicitação na lista de permissões.
// https://daveceddia.com/access-control-allow-origin-cors-errors-in-react-express/
app.use(cors());

//Rotas
app.use("/user", user);

app.listen(PORT, () => {
  console.log("Servidor rodando na porta " + PORT);
});
