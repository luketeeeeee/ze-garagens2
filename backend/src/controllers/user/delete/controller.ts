import { Request, Response } from 'express';
import { deleteUser, findUserById } from '../../../services/user';

export const remove = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;

    const userToDelete = await findUserById(userId);

    if (!userToDelete) {
      return res.status(404).json({
        message: 'Usuário não encontrado',
      });
    }

    await deleteUser(userId);

    return res.status(204).json({
      message: 'Usuário apagado com sucesso',
    });
  } catch (error) {
    return res.status(500).json({
      message: 'erro interno no servidor',
    });
  }
};
