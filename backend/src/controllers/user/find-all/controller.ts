import { Request, Response } from 'express';
import { findAllUsers } from '../../../services/user';

export const findAll = async (_req: Request, res: Response) => {
  try {
    const users = await findAllUsers();

    return res.status(200).json({
      data: users,
    });
  } catch (error) {
    return res.status(500).json({
      message: 'erro interno no servidor',
    });
  }
};
