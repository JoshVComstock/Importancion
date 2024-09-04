import { Router } from "express";
// import CategoriaController from "../controller/productos/categorias.controller";
// import CategoriService from "../service/categoriaService";
import verifyToken from "../../../middleware/token";
import { ROUTES } from "../../../common/utils/routes.enum";
import LoteController from "../controller/generales/lote.controller";
import GeneralService from "../service/generalService";

const router = Router();
const serviceData = new GeneralService();
const lotecontroller = new LoteController(serviceData);

router.get(ROUTES.INITIAL, (req, res) => lotecontroller.getItems(req, res));
router.post(ROUTES.INITIAL, (req, res) => lotecontroller.addItem(req, res));
router.put(ROUTES.BYID, (req, res) => lotecontroller.updateItem(req, res));
router.delete(ROUTES.BYID, (req, res) => lotecontroller.deleteItem(req, res));

export default router;
