import { Request, Response } from "express";
import UnidadesService from "../../service/unidadesService";
import { NotFoundError } from "../../common/validators/customErrors";

class ProductoController {
  private unidadesService: UnidadesService;

  constructor(unidadesService: UnidadesService) {
    this.unidadesService = unidadesService;
  }

  async getItems(req: Request, res: Response) {
    const items = await this.unidadesService.getItems();
    if (!items) {
      throw new NotFoundError("Items not found");
    }
    res.json(items);
  }

  async addItem(req: Request, res: Response) {
    console.log(req.body);
    const item = await this.unidadesService.addItem(req.body);
    res.status(201).json(item);
  }

  async updateItem(req: Request, res: Response) {
    const updatedItem = await this.unidadesService.updateItem(
      Number(req.params.id),
      req.body
    );
    if (!updatedItem) {
      throw new NotFoundError(`Item with id ${req.params.id} not found`);
    }
    res.json(updatedItem);
  }

  async deleteItem(req: Request, res: Response) {
    const deleted = await this.unidadesService.deleteItem(
      Number(req.params.id)
    );
    if (!deleted) {
      throw new NotFoundError(`Item with id ${req.params.id} not found`);
    }
    res.status(204).send();
  }
}

export default ProductoController;
