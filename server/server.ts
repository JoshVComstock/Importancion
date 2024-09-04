import "module-alias/register";
import express from "express";
import dotenv from "dotenv";
import path from "path";
import ProductosRoutes from "./src/modules/inventary/routes/productos.routes";
import UnidadesRoutes from "./src/modules/inventary/routes/unidades.routes";
import CategoriaRoutes from "./src/modules/inventary/routes/categorias.routes";
import LoteRoutes from "./src/modules/inventary/routes/lote.routes";
import { ROUTES } from "./src/common/utils/routes.enum";

const env = process.env.NODE_ENV || "development";
dotenv.config({ path: path.resolve(__dirname, `.env.${env}`) });

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(ROUTES.UPLOAD, express.static(path.join(__dirname, "..", "uploads")));
app.use(ROUTES.PRODUCT, ProductosRoutes);
app.use(ROUTES.UNITS, UnidadesRoutes);
app.use(ROUTES.CATEGORY, CategoriaRoutes);
app.use(ROUTES.BATCH, LoteRoutes);

app.listen(PORT, () => {
  console.log(`Server en el host :  http://localhost:${PORT}`);
});
