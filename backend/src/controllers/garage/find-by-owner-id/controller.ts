import { Request, Response } from 'express';
import { findGaragesByOwnerId } from '../../../services/garage';

export const findByOwnerId = async (req: Request, res: Response) => {
  try {
    const { ownerId } = req.params;

    const prospects = await findGaragesByOwnerId(ownerId);

    if (!prospects) {
      return res.status(404).json({
        message: 'Nenhuma garagem encontrada',
      });
    }

    return res.status(200).json({
      data: prospects,
    });
  } catch (error) {
    return res.status(500).json({
      message: 'erro interno no servidor',
    });
  }
};
