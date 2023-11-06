import { Request, Response } from 'express';
import { createGarage } from '../../../services/garage';

export const create = async (req: Request, res: Response) => {
  try {
    const body = req.body;

    const newGarage = await createGarage({
      ...body,
    });

    return res.status(201).json({
      message: 'Garagem criada com sucesso',
      data: newGarage,
    });
  } catch (error) {
    return res.status(500).json({
      message: 'erro interno no servidor',
    });
  }
};
