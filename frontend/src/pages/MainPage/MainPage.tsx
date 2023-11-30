import { useEffect } from 'react';
import { Container } from '../../components/Container';
import { Header } from '../../components/Header';
import { useGarages } from '../../hooks';
import { GarageCard } from '../../components/GarageCard';

type GarageCardProps = {
	// id?: string,
	available: boolean;
	pricePerDay: number;
	street: string;
	neighborhood: string;
	city: string;
	owner: string;
	number?: number;
};

export const MainPage = () => {
	const { findAllGarages, garages } = useGarages();

	useEffect(() => {
		findAllGarages();

		console.log(garages);
	}, []);

	return (
		<Container>
			<Header />
			<div>
				{garages.map((garage: GarageCardProps) => (
					<GarageCard
						available={garage.available}
						city={garage.city}
						neighborhood={garage.neighborhood}
						street={garage.street}
						number={garage.number}
						pricePerDay={garage.pricePerDay}
						owner={garage.owner}
					/>
				))}
			</div>
		</Container>
	);
};
