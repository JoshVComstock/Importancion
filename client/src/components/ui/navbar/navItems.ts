import { ROUTES } from "@/types/enums/Routes";
import {
  IconHome,
  IconMessage,
  IconBox,
  IconMoney,
  IconShop,
  IconPencil,
  IconProduct,
} from "./icons";

export const mainNavItems = [
  {
    path: ROUTES.INICIO,
    label: "Inicio",
    icon: IconHome,
    children: [
      { path: ROUTES.PRODUCTO_MOVIMIENTO, label: "Subruta 1", icon: IconHome },
      {
        path: ROUTES.PRODUCTO_MOVIMIENTO,
        label: "Subruta 2",
        icon: IconMessage,
      },
    ],
  },
  {
    path: ROUTES.PRODUCTO,
    label: "Mensajes",
    icon: IconMessage,
  },
];
export const secondaryNavItems = [
  {
    path: ROUTES.PRODUCTO,
    label: "Productos",
    icon: IconProduct,
    children: [
      { path: ROUTES.PRODUCTO_CATEGORIA, label: "Categoria", icon: IconHome },
      {
        path: ROUTES.PRODUCTO,
        label: "Producto",
        icon: IconMessage,
      },
    ],
  },
  { path: ROUTES.PROFILE, label: "Inventario", icon: IconBox },
  { path: ROUTES.PROFILE, label: "Finanzas", icon: IconMoney },
  { path: ROUTES.PROFILE, label: "Ventas", icon: IconShop },
  { path: ROUTES.PROFILE, label: "Documentos", icon: IconPencil },
];
