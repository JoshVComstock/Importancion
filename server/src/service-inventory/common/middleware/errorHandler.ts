import { Request, Response, NextFunction } from "express";
import { BadRequestError, InternalServerError, NotFoundError } from "../validators/customErrors";

function errorHandler(err: Error, req: Request, res: Response, next: NextFunction) {
  if (err instanceof BadRequestError) {
    return res.status(400).json({ error: err.message });
  }

  if (err instanceof NotFoundError) {
    return res.status(404).json({ error: err.message });
  }

  if (err instanceof InternalServerError) {
    return res.status(500).json({ error: err.message });
  }

  return res.status(500).json({ error: "Se desconoce del error ,llamar a josh es el capo del sistema :)" });
}

export default errorHandler;
