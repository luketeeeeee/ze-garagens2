import { z } from 'zod';

export const createUserSchema = z
	.object({
		name: z.string().min(2, 'Insira um nome'),
		phoneNumber: z
			.string({ required_error: 'Informe um telefone' })
			.min(15, 'Informe um telefone válido'),
		email: z.string().email('Informe um e-mail válido'),
		cpf: z.string().min(11, 'Informe um CPF'),
		password: z.string().min(8, 'A senha deve possuir no mínimo 8 caracteres'),
		confirmPassword: z.string().min(1, 'Confirme a senha'),
	})
	.refine((data) => data.password === data.confirmPassword, {
		path: ['confirmPassword'],
		message: 'As senhas não coincidem',
	});

export type CreateUserSchemaType = z.infer<typeof createUserSchema>;
