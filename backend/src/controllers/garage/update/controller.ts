import { Request, Response } from 'express';
import { findGarageById, updateGarage } from '../../../services/garage';

export const update = async (req: Request, res: Response) => {
  try {
    const { garageId } = req.params;
    const garageData = req.body;

    const garageToUpdate = await findGarageById(garageId);

    if (!garageToUpdate) {
      return res.status(404).json({
        message: 'Garagem não encontrada',
      });
    }

    const updatedGarage = await updateGarage(garageId, garageData);

    return res.status(200).json({
      message: 'Garagem atualizada com sucesso',
      data: updatedGarage,
    });
  } catch (error) {
    return res.status(500).json({
      message: 'erro interno no servidor',
    });
  }
};
