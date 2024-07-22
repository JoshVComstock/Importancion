export enum ROUTES {
  LOGIN = "/",
  DASHBOARD = "/dashboard",
  INVENTORY ="/inventory",

  INICIO = ROUTES.DASHBOARD + "/inicio",
  PROFILE = ROUTES.DASHBOARD + "/profile",
  //  Message
  MESSAGE = ROUTES.DASHBOARD + "/message",

  //inventari
  INVENTORY_PRODUCT = ROUTES.DASHBOARD + INVENTORY + "/product",
  INVENTORY_OPERATIONES = ROUTES.DASHBOARD + INVENTORY + "/operationes",
  INVENTORY_REPORT = ROUTES.DASHBOARD + INVENTORY + "/report",
  INVENTORY_CONFIG = ROUTES.DASHBOARD + INVENTORY + "/config",
}
