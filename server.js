//Importando o Express
import dotenv from "dotenv";
import app from "./src/app.js";

dotenv.config();

//Definição de uma constante para a porta TCP
const PORT = process.env.PORT || 3000;

//Inicialização de um servidor WEB
app.listen(PORT, () => {
    console.log("Servidor inicializado");
})





