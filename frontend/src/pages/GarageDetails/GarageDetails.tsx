import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeftCircleIcon } from '@heroicons/react/24/outline';

import { Container } from '../../components/Container';
import { Header } from '../../components/Header';
import { useGarages } from '../../hooks';

export const GarageDetails = () => {
	const { garageId } = useParams();

	const { garage, findGarageById } = useGarages();

	useEffect(() => {
		findGarageById(garageId);
	}, []);

	return (
		<Container>
			<Header />
			<div className="flex items-center justify-center py-28 text-white">
				<div className="flex w-[550px] flex-col rounded-xl bg-black bg-opacity-70 px-10 py-7">
					<div className="flex"></div>

					<Link
						to="/"
						className="hover:cursor-pointer"
						title="Voltar à tela inicial"
					>
						<ArrowLeftCircleIcon width={44} />
					</Link>

					<div className="mb-8 flex w-full flex-col items-center justify-center text-2xl font-semibold">
						<h1 className="">Garagem localizada em:</h1>
						<h1>{garage.street}</h1>
					</div>

					<div className="text-xl">
						<p>Bairro: {garage.neighborhood}</p>
						{garage.number ? <p>{garage.number}</p> : <p>Sem número</p>}
						<p>Cidade: {garage.city}</p>
					</div>

					<div className="mt-4 flex items-center justify-between">
						<p className="text-xl">Dono: {garage.owner}</p>
						<h1 className="flex items-center gap-2 text-3xl">
							R$ {garage.pricePerDay} <p className="text-lg">p/dia</p>
						</h1>
					</div>

					<button className="mt-10 w-64 self-center rounded-2xl bg-blue-950 py-3 text-white transition duration-500 hover:bg-blue-900">
						Alugar
					</button>
				</div>
			</div>
		</Container>
	);
};
