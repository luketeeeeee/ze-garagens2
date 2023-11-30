import { Request, Response } from 'express';
import { findAllGarages } from '../../../services/garage';

export const findAll = async (_req: Request, res: Response) => {
  try {
    const garages = await findAllGarages();

    return res.status(200).json({
      data: garages,
    });
  } catch (error) {
    return res.status(500).json({
      message: 'erro interno no servidor',
    });
  }
};
