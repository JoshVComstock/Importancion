import { Router } from "express";
import CategoriaController from "../controller/productos/categorias.controller";
import CategoriService from "../service/categoriaService";
import verifyToken from "../common/middleware/token";

const router = Router();
const categoriaService = new CategoriService();
const categoriaController = new CategoriaController(categoriaService);

router.get("/", verifyToken, (req, res) =>
  categoriaController.getItems(req, res)
);
router.post("/", (req, res) => categoriaController.addItem(req, res));
router.put("/:id", (req, res) => categoriaController.updateItem(req, res));
router.delete("/:id", (req, res) => categoriaController.deleteItem(req, res));

export default router;
