import { ROUTES } from "@/types/enums/Routes";
import { IconHome, IconMessage, IconBox, IconMoney, IconShop, IconPencil, IconBoxProduc, IconChartReport, IconDirectional, IconGear } from "./icons";
export interface NavItem {
  path: ROUTES;
  label: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  children?: NavItem[];
}

export const mainNavItems:NavItem[] = [
  {
    path: ROUTES.DASHBOARD,
    label: "Inicio",
    icon: IconHome,
  },
  {
    path: ROUTES.MESSAGE,
    label: "Mensajes",
    icon: IconMessage
  }
];
export const secondaryNavItems = [
  {  label: "Inventario", icon: IconBox , path:ROUTES.INVENTORY_PRODUCT,
    children: [
      { path: ROUTES.INVENTORY_PRODUCT, label: "Productos", icon: IconBoxProduc },
      { path: ROUTES.INVENTORY_OPERATIONES, label: "Operaciones", icon: IconDirectional },
      { path: ROUTES.INVENTORY_REPORT, label: "Reportes", icon: IconChartReport },
      { path: ROUTES.INVENTORY_CONFIG, label: "Configuracion", icon: IconGear },
    ]
  },
  { path: ROUTES.PROFILE, label: "Finanzas", icon: IconMoney },
  { path: ROUTES.PROFILE, label: "Ventas", icon: IconShop },
  { path: ROUTES.PROFILE, label: "Documentos", icon: IconPencil },
];
