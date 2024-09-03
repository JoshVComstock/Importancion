import { Request, Response } from "express";
import ProdcutoService from "../../service/productosService";
import { NotFoundError } from "../../common/validators/customErrors";

class ProductoController {
  private prodcutoService: ProdcutoService;

  constructor(prodcutoService: ProdcutoService) {
    this.prodcutoService = prodcutoService;
  }

  async getItems(req: Request, res: Response) {
    const items = await this.prodcutoService.getItems();
    if (!items) {
      throw new NotFoundError("Items not found");
    }
    res.json(items);
  }

  async addItem(req: Request, res: Response) {
    const item = await this.prodcutoService.addItem(req.body);
    res.status(201).json(item);
  }

  async updateItem(req: Request, res: Response) {
    const updatedItem = await this.prodcutoService.updateItem(
      Number(req.params.id),
      req.body
    );
    if (!updatedItem) {
      throw new NotFoundError(`Item with id ${req.params.id} not found`);
    }
    res.json(updatedItem);
  }

  async deleteItem(req: Request, res: Response) {
    const deleted = await this.prodcutoService.deleteItem(
      Number(req.params.id)
    );
    if (!deleted) {
      throw new NotFoundError(`Item with id ${req.params.id} not found`);
    }
    res.status(204).send();
  }
}

export default ProductoController;
