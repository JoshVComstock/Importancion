import { Request, Response } from "express";
import CategoriaService from "../../service/categoriaService";
import { NotFoundError } from "../../common/validators/customErrors";

class CategoriaController {
  private categoriaService: CategoriaService;

  constructor(categoriaService: CategoriaService) {
    this.categoriaService = categoriaService;
  }

  async getItems(req: Request, res: Response) {
    const items = await this.categoriaService.getItems();
    if (!items) {
      throw new NotFoundError("Items not found");
    }
    res.json(items);
  }

  async addItem(req: Request, res: Response) {
    const item = await this.categoriaService.addItem(req.body);
    res.status(201).json(item);
  }

  async updateItem(req: Request, res: Response) {
    const updatedItem = await this.categoriaService.updateItem(
      Number(req.params.id),
      req.body
    );
    if (!updatedItem) {
      throw new NotFoundError(`Item with id ${req.params.id} not found`);
    }
    res.json(updatedItem);
  }

  async deleteItem(req: Request, res: Response) {
    const deleted = await this.categoriaService.deleteItem(
      Number(req.params.id)
    );
    if (!deleted) {
      throw new NotFoundError(`Item with id ${req.params.id} not found`);
    }
    res.status(204).send();
  }
}

export default CategoriaController;
