import prisma from '../../prisma';

export const findUserByCPF = (userCPF: string) => {
  return prisma.user.findUnique({ where: { cpf: userCPF } });
};
