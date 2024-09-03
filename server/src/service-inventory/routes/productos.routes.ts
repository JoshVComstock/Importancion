import { Router } from "express";
import InventoryService from "../service/productosService";
import InventoryController from "../controller/productos/productos.controller";

const router = Router();
const inventoryService = new InventoryService();
const inventoryController = new InventoryController(inventoryService);

router.get("/", (req, res) => inventoryController.getItems(req, res));
router.post("/", (req, res) => inventoryController.addItem(req, res));
router.put("/:id", (req, res) => inventoryController.updateItem(req, res));
router.delete("/:id", (req, res) => inventoryController.deleteItem(req, res));

export default router;
