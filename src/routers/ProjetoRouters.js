import express from "express";
import ProjetoController from "../controllers/ProjetoController.js";

const ProjetoRouters = express.Router();

ProjetoRouters.get("/", ProjetoController.getAll);
ProjetoRouters.post("/", ProjetoController.create);
ProjetoRouters.delete("/:id", ProjetoController.delete);
ProjetoRouters.put("/:id", ProjetoController.update);

export default ProjetoRouters;
