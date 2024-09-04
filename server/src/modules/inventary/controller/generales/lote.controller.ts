import { Request, Response } from "express";

import { NotFoundError } from "../../../../common/validators/customErrors";
import GeneralService from "../../service/generalService";

class LoteController {
  private generaGeneralService: GeneralService;

  constructor(generaGeneralService: GeneralService) {
    this.generaGeneralService = generaGeneralService;
  }

  async getItems(req: Request, res: Response) {
    const items = await this.generaGeneralService.getItems("lote");
    if (!items) {
      throw new NotFoundError("Items not found");
    }
    res.json(items);
  }

  async addItem(req: Request, res: Response) {
    console.log(req.body);
    const item = await this.generaGeneralService.addItem(req.body, "lote");
    res.status(201).json(item);
  }

  async updateItem(req: Request, res: Response) {
    const id = Number(req.params.id);

    const updatedItem = await this.generaGeneralService.updateItem(
      { id_lote: id },
      req.body,
      "lote"
    );
    if (!updatedItem) {
      throw new NotFoundError(`Item with id ${req.params.id} not found`);
    }
    res.json(updatedItem);
  }

  async deleteItem(req: Request, res: Response) {
    const id = Number(req.params.id);
    const deleted = await this.generaGeneralService.deleteItem(
      { id_lote: id },
      "lote"
    );
    if (!deleted) {
      throw new NotFoundError(`Item with id ${req.params.id} not found`);
    }
    res.status(204).send();
  }
}

export default LoteController;
