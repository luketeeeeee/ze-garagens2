import { create } from 'zustand';
import { toast } from 'react-hot-toast';

import { CreateUserSchemaType } from '../pages/Register/Register.helpers';

type useUsersProps = {
	users: [];
	findAllUsers: () => void;
	createUser: (
		data: CreateUserSchemaType,
		setIsModalOpen?: () => void,
		reset?: () => void
	) => void;
};

export const useUsers = create<useUsersProps>((set) => ({
	users: [],
	findAllUsers: async () => {
		try {
			const response = await fetch(`${import.meta.env.VITE_API_URL}/users`, {
				method: 'GET',
				headers: {
					Authorization: `${import.meta.env.VITE_API_KEY}`,
					'Content-Type': 'application/json',
				},
			});

			if (response.ok) {
				const result = await response.json();
				set({ users: result.data });
			}
		} catch (error) {}
	},
	createUser: async (data, setIsModalOpen, reset) => {
		try {
			await fetch(`${import.meta.env.VITE_API_URL}/users`, {
				method: 'POST',
				headers: {
					Authorization: `${import.meta.env.VITE_API_KEY}`,
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					name: data.name,
					email: data.email,
					cpf: data.cpf,
					phoneNumber: data.phoneNumber,
					password: data.password,
				}),
			}).then(async (response) => {
				if (!response.ok) {
					return response.text().then((text) => {
						throw new String(text);
					});
				}

				if (setIsModalOpen && reset) {
					setIsModalOpen();
					reset();
				}
				toast.success('Usuário criado com sucesso');
			});
		} catch (error: any) {
			let errorJsonFormat = JSON.parse(error);
			toast.error(errorJsonFormat.message);
		}
	},
}));
