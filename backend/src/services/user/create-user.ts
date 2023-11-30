import { Prisma } from '@prisma/client';
import prisma from '../../prisma';

export const createUser = (user: Prisma.UserCreateInput) => {
  return prisma.user.create({ data: user });
};
