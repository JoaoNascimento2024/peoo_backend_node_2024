import express from "express";
import CategoriaController from "../controllers/CategoriaController.js";

const CategoriaRouters = express.Router();

CategoriaRouters.get("/", CategoriaController.getAll);
CategoriaRouters.post("/", CategoriaController.create);

export default CategoriaRouters;
