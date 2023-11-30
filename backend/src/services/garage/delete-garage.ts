import prisma from '../../prisma';

export const deleteGarage = (garageId: string) => {
  return prisma.garage.delete({ where: { id: garageId } });
};
