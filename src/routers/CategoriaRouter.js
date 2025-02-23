import express from "express";
import CategoriaController from "../controllers/CategoriaController.js";

const CategoriaRouters = express.Router();

CategoriaRouters.get("/", CategoriaController.getAll);
CategoriaRouters.post("/", CategoriaController.create);
CategoriaRouters.delete("/:id", CategoriaController.delete);
CategoriaRouters.put("/:id", CategoriaController.update);

export default CategoriaRouters;
