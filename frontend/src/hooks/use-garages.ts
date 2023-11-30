import toast from 'react-hot-toast';
import { create } from 'zustand';

type CreateGarageProps = {
	pricePerDay: string;
	owner: string;
	ownerId: string;
	ownerPhoneNumber: string;
	city: string;
	neighborhood: string;
	street: string;
	number?: string;
	cep?: string;
};

type GarageCardProps = {
	available?: boolean;
	pricePerDay?: string;
	street?: string;
	neighborhood?: string;
	city?: string;
	owner?: string;
	number?: string;
};

type useGaragesProps = {
	garages: [];
	garage: GarageCardProps;
	createGarage: (data: CreateGarageProps) => void;
	findAllGarages: () => void;
	findGaragesByOwnerId: (ownerId: string) => void;
	findGarageById: (garageId: string | undefined) => void;
};

export const useGarages = create<useGaragesProps>((set) => ({
	garages: [],
	garage: {},
	createGarage: async (data) => {
		try {
			const price = Number(data.pricePerDay);
			const number = Number(data?.number);

			await fetch(`${import.meta.env.VITE_API_URL}/garages`, {
				method: 'POST',
				headers: {
					Authorization: `${import.meta.env.VITE_API_KEY}`,
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					pricePerDay: price,
					owner: data.owner,
					ownerId: data.ownerId,
					ownerPhoneNumber: data.ownerPhoneNumber,
					city: data.city,
					neighborhood: data.neighborhood,
					street: data.street,
					number: number,
					cep: data?.cep,
				}),
			}).then(async (response) => {
				if (!response.ok) {
					return response.text().then((text) => {
						throw new String(text);
					});
				}

				toast.success('Garagem criada com sucesso');
			});
		} catch (error: any) {
			let errorJsonFormat = JSON.parse(error);
			toast.error(errorJsonFormat.message);
		}
	},
	findAllGarages: async () => {
		try {
			const response = await fetch(`${import.meta.env.VITE_API_URL}/garages`, {
				method: 'GET',
				headers: {
					Authorization: `${import.meta.env.VITE_API_KEY}`,
					'Content-Type': 'application/json',
				},
			});

			if (response.ok) {
				const result = await response.json();
				set({ garages: result.data.reverse() });
			}
		} catch (error) {}
	},
	findGaragesByOwnerId: async (ownerId: string) => {
		try {
			const response = await fetch(
				`${import.meta.env.VITE_API_URL}/garages/find-by-owner-id/${ownerId}`,
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
				set({ garages: result.data.reverse() });
			}
		} catch (error) {}
	},
	findGarageById: async (garageId: string | undefined) => {
		try {
			const response = await fetch(
				`${import.meta.env.VITE_API_URL}/garages/${garageId}`,
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
				set({ garage: result.data });
			}
		} catch (error) {}
	},
}));
