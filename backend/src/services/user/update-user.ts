import { Prisma } from "@prisma/client";
import prisma from "../../prisma";

export const updateUser = (userId: string, user: Prisma.UserUpdateInput) => {
  return prisma.user.update({ where: { id: userId }, data: user });
};
