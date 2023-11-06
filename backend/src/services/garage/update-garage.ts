import { Prisma } from '@prisma/client';
import prisma from '../../prisma';

export const updateGarage = (garageId: string, garage: Prisma.GarageUpdateInput) => {
  return prisma.garage.update({ where: { id: garageId }, data: garage });
};
