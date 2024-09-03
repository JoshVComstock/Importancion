import { PrismaClient, productos } from "@prisma/client";

class ProductoService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async getItems(): Promise<productos[]> {
    return this.prisma.productos.findMany();
  }

  async addItem(data: Omit<productos, "id_productos">): Promise<productos> {
    return this.prisma.productos.create({
      data,
    });
  }
  async updateItem(
    id: number,
    data: Partial<productos>
  ): Promise<productos | null> {
    return this.prisma.productos.update({
      where: { id_productos: id },
      data,
    });
  }

  async deleteItem(id: number): Promise<productos | null> {
    return this.prisma.productos.delete({
      where: { id_productos: id },
    });
  }
}

export default ProductoService;
