export enum ROUTES {
  INITIAL = "/",
  BYID = "/:id",
  PREFICURL = "/api",
  UPLOAD = "/uploads",
  PRODUCT = PREFICURL + "/Productos",
  TYPEPRODUCT = PRODUCT + "/type",
  UNITS = PREFICURL + "/unidades",
  CATEGORY = PREFICURL + "/categorias",
  BATCH = PREFICURL + "/lote",
}
