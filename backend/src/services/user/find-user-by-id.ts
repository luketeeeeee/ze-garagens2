import prisma from '../../prisma';

export const findUserById = (userId: string) => {
  return prisma.user.findUnique({ where: { id: userId } });
};
