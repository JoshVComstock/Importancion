import { PrismaClient} from "@prisma/client";

class UnidadesService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async getItems() {
    return this.prisma.unidades.findMany();
  }

  async addItem(data: any) {
    return this.prisma.unidades.create({
      data,
    });
  }
  async updateItem(id: number, data: any) {
    return this.prisma.unidades.update({
      where: { id_unidades: id },
      data,
    });
  }

  async deleteItem(id: number) {
    return this.prisma.unidades.delete({
      where: { id_unidades: id },
    });
  }
}

export default UnidadesService;
