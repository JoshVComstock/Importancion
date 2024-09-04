import { PrismaClient } from "@prisma/client";

class CategoriService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async getItems() {
    return this.prisma.categorias.findMany();
  }

  async addItem(data: any) {
    return this.prisma.categorias.create({
      data,
    });
  }
  async updateItem(id: number, data: any) {
    return this.prisma.categorias.update({
      where: { id_categoria: id },
      data,
    });
  }

  async deleteItem(id: number) {
    return this.prisma.categorias.delete({
      where: { id_categoria: id },
    });
  }
}

export default CategoriService;
