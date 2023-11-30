import { Request, Response } from 'express';
import argon2 from 'argon2';
import { findUserByEmail } from '../../../services/user';

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const existingUser = await findUserByEmail(email);

    if (!existingUser) {
      return res.status(403).json({
        message: 'email ou senha inválidos',
      });
    }

    const validPassword = await argon2.verify(existingUser.password, password);

    if (!validPassword) {
      return res.status(403).json({
        message: 'email ou senha inválidos',
      });
    }

    return res.status(200).json({
      id: existingUser.id,
      name: existingUser.name,
      email: existingUser.email,
      phoneNumber: existingUser.phoneNumber,
    });
  } catch (error) {
    return res.status(500).json({
      message: 'erro interno no servidor',
    });
  }
};
