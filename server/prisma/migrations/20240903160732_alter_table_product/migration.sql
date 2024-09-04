/*
  Warnings:

  - You are about to drop the column `codigo_importado` on the `productos` table. All the data in the column will be lost.
  - You are about to drop the column `costoUnitarioOrigen` on the `productos` table. All the data in the column will be lost.
  - You are about to drop the column `idGestion` on the `productos` table. All the data in the column will be lost.
  - You are about to drop the column `idMultimedia` on the `productos` table. All the data in the column will be lost.
  - You are about to drop the `gestion` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `alto` to the `productos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ancho` to the `productos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `codigo_importacion` to the `productos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `costo` to the `productos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idLote` to the `productos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idTipoProducto` to the `productos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idencargado` to the `productos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imageUrl` to the `productos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `impuestoCompra` to the `productos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `impuestoVenta` to the `productos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `volumen` to the `productos` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "productos" DROP CONSTRAINT "productos_idGestion_fkey";

-- DropForeignKey
ALTER TABLE "productos" DROP CONSTRAINT "productos_idMultimedia_fkey";

-- AlterTable
ALTER TABLE "productos" DROP COLUMN "codigo_importado",
DROP COLUMN "costoUnitarioOrigen",
DROP COLUMN "idGestion",
DROP COLUMN "idMultimedia",
ADD COLUMN     "alto" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "ancho" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "codigo_importacion" VARCHAR(100) NOT NULL,
ADD COLUMN     "colores" TEXT[],
ADD COLUMN     "costo" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "idLote" INTEGER NOT NULL,
ADD COLUMN     "idTipoProducto" INTEGER NOT NULL,
ADD COLUMN     "idencargado" INTEGER NOT NULL,
ADD COLUMN     "imageUrl" TEXT NOT NULL,
ADD COLUMN     "impuestoCompra" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "impuestoVenta" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "volumen" DOUBLE PRECISION NOT NULL,
ALTER COLUMN "nombre" SET DATA TYPE VARCHAR(300);

-- DropTable
DROP TABLE "gestion";

-- CreateTable
CREATE TABLE "tipoProducto" (
    "id_tipoProducto" SERIAL NOT NULL,
    "tipo" VARCHAR(300) NOT NULL,

    CONSTRAINT "tipoProducto_pkey" PRIMARY KEY ("id_tipoProducto")
);

-- CreateTable
CREATE TABLE "lote" (
    "id_lote" SERIAL NOT NULL,
    "lote" TEXT NOT NULL,
    "NumSerial" TEXT NOT NULL,

    CONSTRAINT "lote_pkey" PRIMARY KEY ("id_lote")
);

-- AddForeignKey
ALTER TABLE "productos" ADD CONSTRAINT "productos_idTipoProducto_fkey" FOREIGN KEY ("idTipoProducto") REFERENCES "tipoProducto"("id_tipoProducto") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "productos" ADD CONSTRAINT "productos_idLote_fkey" FOREIGN KEY ("idLote") REFERENCES "lote"("id_lote") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "productos" ADD CONSTRAINT "productos_idencargado_fkey" FOREIGN KEY ("idencargado") REFERENCES "User"("id_user") ON DELETE RESTRICT ON UPDATE CASCADE;
