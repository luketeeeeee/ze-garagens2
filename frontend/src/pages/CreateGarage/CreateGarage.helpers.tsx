import { z } from 'zod';

export const createGarageSchema = z.object({
	city: z.string().min(2, 'Insira uma cidade'),
	neighborhood: z.string().min(2, 'Informe um bairro'),
	street: z.string().min(2, 'Informe uma rua'),
	number: z.string().optional(),
	pricePerDay: z.string().min(1, 'Insira um valor'),
});

export type CreateGarageSchemaType = z.infer<typeof createGarageSchema>;
