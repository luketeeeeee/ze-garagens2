import prisma from "../../prisma";

export const deleteUser = (userId: string) => {
  return prisma.user.delete({ where: { id: userId } });
};
