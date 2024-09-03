import { Request, Response } from "express";
import { NotFoundError } from "../../common/validators/customErrors";
import TipoProductoService from "../../service/tipoProductosService";

class TipoProductoController {
  private tipoProductoService: TipoProductoService;

  constructor(tipoProductoService: TipoProductoService) {
    this.tipoProductoService = tipoProductoService;
  }

  async getItems(req: Request, res: Response) {
    const items = await this.tipoProductoService.getItems();
    if (!items) {
      throw new NotFoundError("Items not found");
    }
    res.json(items);
  }

  async addItem(req: Request, res: Response) {
    const item = await this.tipoProductoService.addItem(req.body);
    res.status(201).json(item);
  }

  async updateItem(req: Request, res: Response) {
    const updatedItem = await this.tipoProductoService.updateItem(
      Number(req.params.id),
      req.body
    );
    if (!updatedItem) {
      throw new NotFoundError(`Item with id ${req.params.id} not found`);
    }
    res.json(updatedItem);
  }

  async deleteItem(req: Request, res: Response) {
    const deleted = await this.tipoProductoService.deleteItem(
      Number(req.params.id)
    );
    if (!deleted) {
      throw new NotFoundError(`Item with id ${req.params.id} not found`);
    }
    res.status(204).send();
  }
}

export default TipoProductoController;
