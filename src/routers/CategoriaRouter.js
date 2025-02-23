import express from "express";
import CategoriaController from "../controllers/CategoriaController.js";
import authenticateToken from "../infra/authMiddleware.js";

const CategoriaRouters = express.Router();

CategoriaRouters.get("/", CategoriaController.getAll);
CategoriaRouters.post("/", authenticateToken, CategoriaController.create);
CategoriaRouters.delete("/:id", authenticateToken, CategoriaController.delete);
CategoriaRouters.put("/:id", authenticateToken, CategoriaController.update);

export default CategoriaRouters;
