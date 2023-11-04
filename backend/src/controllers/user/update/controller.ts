import { Request, Response } from 'express';
import { findUserById, updateUser } from '../../../services/user';

export const update = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const body = req.body;

    const userToUpdate = await findUserById(userId);

    if (!userToUpdate) {
      return res.status(404).json({
        message: 'Usuário não encontrado',
      });
    }

    await updateUser(userId, body);

    return res.status(200).json({
      message: 'Usuário atualizado com sucesso',
    });
  } catch (error) {
    return res.status(500).json({
      message: 'erro interno no servidor',
    });
  }
};
