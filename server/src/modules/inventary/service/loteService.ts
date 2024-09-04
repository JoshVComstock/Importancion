import { PrismaClient } from "@prisma/client";

class LoteService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async getItems() {
    return this.prisma.lote.findMany();
  }

  async addItem(data: any) {
    return this.prisma.lote.create({
      data,
    });
  }
  async updateItem(id: number, data: any) {
    return this.prisma.lote.update({
      where: { id_lote: id },
      data,
    });
  }

  async deleteItem(id: number) {
    return this.prisma.lote.delete({
      where: { id_lote: id },
    });
  }
}

export default LoteService;
