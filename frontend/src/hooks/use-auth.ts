import { create } from 'zustand';
import { toast } from 'react-hot-toast';
import { UserType } from '../types';

type useAuthProps = {
	loggedUser: UserType;
	fetchLoggedUserData: (id: string) => void;
	signin: (userData: { email: string; password: string }) => void;
	logout: () => void;
};

const win: Window = window;

export const useAuth = create<useAuthProps>((set) => ({
	loggedUser: {
		id: '',
		email: '',
		name: '',
		phoneNumber: '',
	},
	fetchLoggedUserData: async (id) => {
		try {
			const response = await fetch(
				`${import.meta.env.VITE_API_URL}/users/${id}`,
				{
					method: 'GET',
					headers: {
						Authorization: `${import.meta.env.VITE_API_KEY}`,
						'Content-Type': 'application/json',
					},
				}
			);

			if (response.ok) {
				const result = await response.json();
				set({ loggedUser: result.data });
			}
		} catch (error) {
			alert(error);
		}
	},
	signin: async (userData) => {
		try {
			await fetch(`${import.meta.env.VITE_API_URL}/auth/login`, {
				method: 'POST',
				headers: {
					Authorization: `${import.meta.env.VITE_API_KEY}`,
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(userData),
			}).then((response) => {
				if (!response.ok) {
					return response.text().then((text) => {
						throw new String(text);
					});
				}

				return response.text().then((text) => {
					localStorage.setItem('token', text);
					win.location = '/';
				});
			});
		} catch (error: any) {
			const errorJsonFormat = JSON.parse(error);
			toast.error(errorJsonFormat.message);
		}
	},
	logout: () => {
		localStorage.removeItem('token');
		win.location.reload();
	},
}));
