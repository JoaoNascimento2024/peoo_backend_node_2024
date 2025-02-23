import dotenv from "dotenv";
dotenv.config();

import app from "./src/app.js";
import connection from "./src/config/dbConnect.js";
import ProjetoRouters from "./src/routers/ProjetoRouters.js";
import CategoriaRouters from "./src/routers/CategoriaRouter.js";
import LoginRouters from "./src/routers/LoginRouter.js";

//Definição de uma constante para a porta TCP
const PORT = process.env.PORT || 3000;

app.use("/projetos",ProjetoRouters);
app.use("/categorias", CategoriaRouters);
app.use("/usuarios", LoginRouters);

//Inicialização de um servidor WEB
app.listen(PORT, () => {
    console.log("Servidor inicializado");
});





