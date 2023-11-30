import { Request, Response } from 'express';
import { findUserById } from '../../../services/user';

export const findById = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;

    const user = await findUserById(userId);

    if (!user) {
      return res.status(404).json({
        message: 'Usuário não encontrado',
      });
    }

    return res.status(200).json({
      data: user,
    });
  } catch (error) {
    return res.status(500).json({
      message: 'erro interno no servidor',
    });
  }
};
