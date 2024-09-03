import { PrismaClient } from "@prisma/client";

class TipoProductoService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async getItems() {
    return this.prisma.tipoProducto.findMany();
  }

  async addItem(data: any) {
    return this.prisma.tipoProducto.create({
      data,
    });
  }
  async updateItem(id: number, data: any) {
    return this.prisma.tipoProducto.update({
      where: { id_tipoProducto: id },
      data,
    });
  }

  async deleteItem(id: number) {
    return this.prisma.tipoProducto.delete({
      where: { id_tipoProducto: id },
    });
  }
}

export default TipoProductoService;
