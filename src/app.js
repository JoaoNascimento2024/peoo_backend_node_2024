import express from "express";
import cors from "cors";
//import {StatusCodes} from "http-status-code";

//Criar o objeto express
const app = express();

//Configurando o express. No caso, estou pedindo para ele utilizar 
//o conversor Json do próprio express
app.use(cors());
app.use(express.json()); 


app.get("/",(req,res) => {
    res.status(200).send("Versão 1.0.0");
});

export default app;