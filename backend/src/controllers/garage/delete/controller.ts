import { Request, Response } from 'express';
import { deleteGarage, findGarageById } from '../../../services/garage';

export const remove = async (req: Request, res: Response) => {
  try {
    const { garageId } = req.params;

    const garageToDelete = await findGarageById(garageId);

    if (!garageToDelete) {
      return res.status(404).json({
        message: 'Garagem não encontrada',
      });
    }

    await deleteGarage(garageId);

    return res.status(204).json({
      message: 'Garagem apagada com sucesso',
    });
  } catch (error) {
    return res.status(500).json({
      message: 'erro interno no servidor',
    });
  }
};
