import { PrismaClient } from "@prisma/client";

class GeneralService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async getItems(tabla: keyof PrismaClient): Promise<any[]> {
    const modelClient = this.prisma[tabla] as {
      findMany: () => Promise<any[]>;
    };
    return modelClient.findMany();
  }

  async addItem(data: any, table: keyof PrismaClient) {
    //@ts-ignore
    return this.prisma[table].create({
      data,
    });
  }
  async updateItem(id: number, data: any ,table: keyof PrismaClient ) {
    //@ts-ignore
    return this.prisma[table].update({
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

export default GeneralService;
