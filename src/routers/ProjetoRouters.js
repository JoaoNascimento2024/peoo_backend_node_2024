import express from "express";
import ProjetoController from "../controllers/ProjetoController.js";

const ProjetoRouters = express.Router();

ProjetoRouters.get("/", ProjetoController.getAll);
ProjetoRouters.post("/", ProjetoController.create);

export default ProjetoRouters;
