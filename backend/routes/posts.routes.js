import { Router } from "express";
import {
  getPosts,
  createPost,
  deletePost,
} from "../controllers/controllers.js";

// Creamos un router que sirve para manejar las rutas de las funciones del controlador
const router = Router();

// Se obtienen las rutas de las funciones del controlador
router.get("/posts", getPosts);
router.post("/posts", createPost);
router.delete("/posts/:id", deletePost);

export default router;
