import prisma from '../../prisma';

export const findGarageById = (garageId: string) => {
  return prisma.garage.findUnique({ where: { id: garageId } });
};
