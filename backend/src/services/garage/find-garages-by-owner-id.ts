import prisma from '../../prisma';

export const findGaragesByOwnerId = (garageOwnerId: string) => {
  return prisma.garage.findMany({
    where: { ownerId: garageOwnerId },
  });
};
