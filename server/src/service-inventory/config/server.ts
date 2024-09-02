import express, { Request, Response } from "express";
import dotenv from "dotenv";
import path from "path";
import ProductosRoutes from "../routes/productos.routes";
import UnidadesRoutes from "../routes/unidades.routes";
import CategoriaRoutes from "../routes/categorias.routes";

const env = process.env.NODE_ENV || "development";
dotenv.config({ path: path.resolve(__dirname, `.env.${env}`) });

const app = express();
const PORT = process.env.PORT || 3000;
const preficURL = "/api";

app.get("/", (req: Request, res: Response) => {
  res.send("Hola josh a chambear!");
});

app.use(`${preficURL}/productos`, ProductosRoutes);
app.use(`${preficURL}/unidades`, UnidadesRoutes);
app.use(`${preficURL}/categorias`, CategoriaRoutes);

app.listen(PORT, () => {
  console.log(`Server en el host :  http://localhost:${PORT}`);
});
