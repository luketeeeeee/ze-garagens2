import { Request, Response } from 'express';
import { findGarageById } from '../../../services/garage';

export const findById = async (req: Request, res: Response) => {
  try {
    const { garageId } = req.params;

    const garage = await findGarageById(garageId);

    if (!garage) {
      return res.status(404).json({
        message: 'Garagem não encontrada',
      });
    }

    return res.status(200).json({
      data: garage,
    });
  } catch (error) {
    return res.status(500).json({
      message: 'erro interno no servidor',
    });
  }
};
