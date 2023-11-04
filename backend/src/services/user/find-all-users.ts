import prisma from '../../prisma';

export const findAllUsers = () => {
  return prisma.user.findMany({});
};
