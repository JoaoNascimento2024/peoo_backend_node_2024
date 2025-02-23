import express from "express";
import LoginController from "../controllers/LoginController.js";

const LoginRouter = express.Router();

LoginRouter.post("/login", LoginController.login);
LoginRouter.post("/", LoginController.cadastrarUsuario);

export default LoginRouter;