import { Request, Response } from 'express';
import InventoryService from '../services/InventoryService';

class InventoryController {
  private inventoryService: InventoryService;

  constructor(inventoryService: InventoryService) {
    this.inventoryService = inventoryService;
  }

  async getItems(req: Request, res: Response) {
    const items = await this.inventoryService.getItems();
    res.json(items);
  }

  async addItem(req: Request, res: Response) {
    const item = await this.inventoryService.addItem(req.body);
    res.status(201).json(item);
  }

  async updateItem(req: Request, res: Response) {
    const updatedItem = await this.inventoryService.updateItem(Number(req.params.id), req.body);
    res.json(updatedItem);
  }

  async deleteItem(req: Request, res: Response) {
    await this.inventoryService.deleteItem(Number(req.params.id));
    res.status(204).send();
  }
}

export default InventoryController;
