import { Router } from "express";
import UnidadesController from "../controller/generales/unidades.controller";
import UnidadesService from "../service/unidadesService";

const router = Router();
const unidadesService = new UnidadesService();
const unidadesController = new UnidadesController(unidadesService);

// Definición de rutas con manejo de errores usando un middleware
router.get("/", async (req, res, next) => {
  try {
    await unidadesController.getItems(req, res);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    await unidadesController.addItem(req, res);
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    await unidadesController.updateItem(req, res);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    await unidadesController.deleteItem(req, res);
  } catch (error) {
    next(error);
  }
});

export default router;
