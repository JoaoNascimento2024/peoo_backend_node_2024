import dotenv from "dotenv";
dotenv.config();

import app from "./src/app.js";
import connection from "./src/config/dbConnect.js";
import ProjetoRouters from "./src/routers/ProjetoRouters.js";

//Definição de uma constante para a porta TCP
const PORT = process.env.PORT || 3000;

app.use("/projetos",ProjetoRouters);

//Inicialização de um servidor WEB
app.listen(PORT, () => {
    console.log("Servidor inicializado");
});





