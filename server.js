//Importando o Express
const express = require("express");

//Inicialização do express
const app = express();

//Definição da função que responde a requisição GET na rota hello
app.get("/hello", (req, res) => {
    res.send("Hello World");
});

//Definição de uma constante para a porta TCP
const PORT = process.env.PORT || 3000;

//Inicialização de um servidor WEB
app.listen(PORT, () => {
    console.log("Servidor inicializado");
})





