-- CreateTable
CREATE TABLE "User" (
    "id_user" SERIAL NOT NULL,
    "email" VARCHAR(100) NOT NULL,
    "password" VARCHAR(150) NOT NULL,
    "rol" VARCHAR(80) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id_user")
);

-- CreateTable
CREATE TABLE "productos" (
    "id_productos" SERIAL NOT NULL,
    "numItem" VARCHAR(50) NOT NULL,
    "codigo_importado" VARCHAR(100) NOT NULL,
    "nombre" VARCHAR(200) NOT NULL,
    "observaciones" VARCHAR(600) NOT NULL,
    "cantidad" INTEGER NOT NULL,
    "costoUnitarioOrigen" DOUBLE PRECISION NOT NULL,
    "idMultimedia" INTEGER NOT NULL,
    "idCategoria" INTEGER NOT NULL,
    "idGestion" INTEGER NOT NULL,

    CONSTRAINT "productos_pkey" PRIMARY KEY ("id_productos")
);

-- CreateTable
CREATE TABLE "precioProducto" (
    "id_precioProducto" SERIAL NOT NULL,
    "idProducto" INTEGER NOT NULL,
    "precioVentaDirecta" DOUBLE PRECISION NOT NULL,
    "precioVenta" DOUBLE PRECISION NOT NULL,
    "precioMayor" DOUBLE PRECISION NOT NULL,
    "utilidad" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "precioProducto_pkey" PRIMARY KEY ("id_precioProducto")
);

-- CreateTable
CREATE TABLE "unidades" (
    "id_unidades" SERIAL NOT NULL,
    "tipoUnidad" VARCHAR(50) NOT NULL,

    CONSTRAINT "unidades_pkey" PRIMARY KEY ("id_unidades")
);

-- CreateTable
CREATE TABLE "multimedia" (
    "id_multimedia" SERIAL NOT NULL,
    "urlRecurso" VARCHAR(200) NOT NULL,

    CONSTRAINT "multimedia_pkey" PRIMARY KEY ("id_multimedia")
);

-- CreateTable
CREATE TABLE "categorias" (
    "id_categoria" SERIAL NOT NULL,
    "nombre" VARCHAR(350) NOT NULL,

    CONSTRAINT "categorias_pkey" PRIMARY KEY ("id_categoria")
);

-- CreateTable
CREATE TABLE "gestion" (
    "id_gestion" SERIAL NOT NULL,
    "gestion" TEXT NOT NULL,

    CONSTRAINT "gestion_pkey" PRIMARY KEY ("id_gestion")
);

-- CreateTable
CREATE TABLE "ventas" (
    "id_ventas" SERIAL NOT NULL,
    "idDetalleVenta" INTEGER NOT NULL,

    CONSTRAINT "ventas_pkey" PRIMARY KEY ("id_ventas")
);

-- CreateTable
CREATE TABLE "detalleventa" (
    "idDetalleVenta" SERIAL NOT NULL,
    "idProducto" INTEGER NOT NULL,
    "cantidad" INTEGER NOT NULL,
    "detalle" VARCHAR(300) NOT NULL,
    "idCambio" INTEGER NOT NULL,
    "idMetodo" INTEGER NOT NULL,

    CONSTRAINT "detalleventa_pkey" PRIMARY KEY ("idDetalleVenta")
);

-- CreateTable
CREATE TABLE "tipoCambio" (
    "id_tipoCambio" SERIAL NOT NULL,
    "tipo" TEXT NOT NULL,

    CONSTRAINT "tipoCambio_pkey" PRIMARY KEY ("id_tipoCambio")
);

-- CreateTable
CREATE TABLE "MetodoPago" (
    "id_Metodo" SERIAL NOT NULL,
    "metodo" TEXT NOT NULL,

    CONSTRAINT "MetodoPago_pkey" PRIMARY KEY ("id_Metodo")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "productos" ADD CONSTRAINT "productos_idMultimedia_fkey" FOREIGN KEY ("idMultimedia") REFERENCES "multimedia"("id_multimedia") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "productos" ADD CONSTRAINT "productos_idCategoria_fkey" FOREIGN KEY ("idCategoria") REFERENCES "categorias"("id_categoria") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "productos" ADD CONSTRAINT "productos_idGestion_fkey" FOREIGN KEY ("idGestion") REFERENCES "gestion"("id_gestion") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ventas" ADD CONSTRAINT "ventas_idDetalleVenta_fkey" FOREIGN KEY ("idDetalleVenta") REFERENCES "detalleventa"("idDetalleVenta") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "detalleventa" ADD CONSTRAINT "detalleventa_idProducto_fkey" FOREIGN KEY ("idProducto") REFERENCES "productos"("id_productos") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "detalleventa" ADD CONSTRAINT "detalleventa_idCambio_fkey" FOREIGN KEY ("idCambio") REFERENCES "tipoCambio"("id_tipoCambio") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "detalleventa" ADD CONSTRAINT "detalleventa_idMetodo_fkey" FOREIGN KEY ("idMetodo") REFERENCES "MetodoPago"("id_Metodo") ON DELETE RESTRICT ON UPDATE CASCADE;
