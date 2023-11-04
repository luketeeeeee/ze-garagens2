import { Request, Response } from 'express';
import argon2 from 'argon2';
import { createUser, findUserByCPF, findUserByEmail } from '../../../services/user';

export const create = async (req: Request, res: Response) => {
  try {
    const body = req.body;

    const existingUserEmail = await findUserByEmail(body.email);
    const existingUserCPF = await findUserByCPF(body.cpf);

    if (existingUserEmail) {
      return res.status(409).json({
        message: 'Endereço de e-mail inválido',
      });
    }

    if (existingUserCPF) {
      return res.status(409).json({
        message: 'O CPF informado já está cadastrado no Zé Garagens',
      });
    }

    const hashPass = await argon2.hash(body.password);

    const newUser = await createUser({
      ...body,
      password: hashPass,
    });

    return res.status(201).json({
      message: 'Usuário criado com sucesso',
      data: newUser,
    });
  } catch (error) {
    return res.status(500).json({
      message: 'erro interno no servidor',
    });
  }
};
