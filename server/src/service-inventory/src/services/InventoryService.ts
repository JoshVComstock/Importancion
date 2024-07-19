import prisma from "../prismaClient";


class InventoryService {
  async getItems() {
    return prisma.inventoryItem.findMany();
  }

  async addItem(data: any) {
    return prisma.inventoryItem.create({ data });
  }

  async updateItem(id: number, data: any) {
    return prisma.inventoryItem.update({
      where: { id },
      data
    });
  }

  async deleteItem(id: number) {
    return prisma.inventoryItem.delete({
      where: { id }
    });
  }
}

export default InventoryService;
