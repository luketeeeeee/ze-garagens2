import { Prisma } from "@prisma/client";
import prisma from "../../prisma";

export const createGarage = (garage: Prisma.GarageCreateInput) => {
  return prisma.garage.create({ data: garage });
};
