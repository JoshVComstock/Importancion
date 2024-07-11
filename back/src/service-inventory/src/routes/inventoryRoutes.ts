import { Router } from 'express';
import InventoryController from '../controllers/InventoryController';
import InventoryService from '../services/InventoryService';

const router = Router();
const inventoryService = new InventoryService();
const inventoryController = new InventoryController(inventoryService);

router.get('/', (req, res) => inventoryController.getItems(req, res));
router.post('/', (req, res) => inventoryController.addItem(req, res));
router.put('/:id', (req, res) => inventoryController.updateItem(req, res));
router.delete('/:id', (req, res) => inventoryController.deleteItem(req, res));

export default router;
