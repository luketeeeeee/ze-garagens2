import { Request, Response } from 'express';
import { findGarageById, updateGarage } from '../../../services/garage';

export const update = async (req: Request, res: Response) => {
  try {
    const { garageId } = req.params;
    // const body = req.body;

    const garageToUpdate = await findGarageById(garageId);

    if (!garageToUpdate) {
      return res.status(404).json({
        message: 'Garagem não encontrada',
      });
    }

    await updateGarage(garageId, { available: !garageToUpdate.available });

    return res.status(200).json({
      message: 'Garagem atualizada com sucesso',
    });
  } catch (error) {
    return res.status(500).json({
      message: 'erro interno no servidor',
    });
  }
};
