import prisma from '../../prisma';

export const findAllGarages = () => {
  return prisma.garage.findMany({});
};
