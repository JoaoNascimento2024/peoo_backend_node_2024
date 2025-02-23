import express from "express";
import ProjetoController from "../controllers/ProjetoController.js";
import authenticateToken from "../infra/authMiddleware.js";

const ProjetoRouters = express.Router();

ProjetoRouters.get("/", ProjetoController.getAll);
ProjetoRouters.post("/", authenticateToken, ProjetoController.create);
ProjetoRouters.delete("/:id", authenticateToken, ProjetoController.delete);
ProjetoRouters.put("/:id", authenticateToken, ProjetoController.update);

export default ProjetoRouters;
