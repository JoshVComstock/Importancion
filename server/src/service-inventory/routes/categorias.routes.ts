import { Router } from "express";
import CategoriaController from "../controller/categorias.controller";
import CategoriService from "../service/categoriaService";

const router = Router();
const categoriaService = new CategoriService();
const categoriaController = new CategoriaController(categoriaService);

router.get("/", (req, res) => categoriaController.getItems(req, res));
router.post("/", (req, res) => categoriaController.addItem(req, res));
router.put("/:id", (req, res) => categoriaController.updateItem(req, res));
router.delete("/:id", (req, res) => categoriaController.deleteItem(req, res));

export default router;
