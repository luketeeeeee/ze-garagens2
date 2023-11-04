import prisma from '../../prisma';

export const findUserByEmail = (userEmail: string) => {
  return prisma.user.findUnique({ where: { email: userEmail } });
};
