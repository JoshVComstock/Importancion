export enum ROUTES {
  LOGIN = "/",
  DASHBOARD = "/dashboard",
  INICIO = ROUTES.DASHBOARD + "/inicio",
  PROFILE = ROUTES.DASHBOARD + "/profile",

  //Product
  PRODUCTO = ROUTES.DASHBOARD + "/producto",
  PRODUCTO_MOVIMIENTO = ROUTES.DASHBOARD + "/producto"+"/movimiento",
}
