import { Router } from "express";
import UnidadesController from "../controller/generales/unidades.controller";
import UnidadesService from "../service/unidadesService";
import { ROUTES } from "../../../common/utils/routes.enum";

const router = Router();
const unidadesService = new UnidadesService();
const unidadesController = new UnidadesController(unidadesService);

router.get(ROUTES.INITIAL, async (req, res, next) => {
  try {
    await unidadesController.getItems(req, res);
  } catch (error) {
    next(error);
  }
});

router.post(ROUTES.INITIAL, async (req, res, next) => {
  try {
    await unidadesController.addItem(req, res);
  } catch (error) {
    next(error);
  }
});

router.put(ROUTES.BYID, async (req, res, next) => {
  try {
    await unidadesController.updateItem(req, res);
  } catch (error) {
    next(error);
  }
});

router.delete(ROUTES.BYID, async (req, res, next) => {
  try {
    await unidadesController.deleteItem(req, res);
  } catch (error) {
    next(error);
  }
});

export default router;
