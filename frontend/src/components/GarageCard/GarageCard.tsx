import { Link } from 'react-router-dom';

export const GarageCard = ({
	id,
	available,
	pricePerDay,
	street,
	neighborhood,
	city,
	owner,
	number,
}: {
	id: string;
	available: boolean;
	pricePerDay: number;
	street: string;
	neighborhood: string;
	city: string;
	owner: string;
	number?: number;
}) => {
	return (
		<div className="flex h-80 w-64 flex-col text-white">
			{available ? (
				<div className="flex h-12 items-center justify-center rounded-t-lg bg-green-500 font-semibold text-white">
					Disponível
				</div>
			) : (
				<div className="flex h-12 items-center justify-center rounded-t-lg bg-red-700 font-semibold text-white">
					Alugada
				</div>
			)}
			<div className="flex h-full flex-col items-center gap-4 rounded-b-lg bg-black bg-opacity-80 py-4">
				<div className="flex flex-col items-center">
					<p>{street}</p>
					<p>{neighborhood}</p>

					{number ? <p>Número{number}</p> : <p>Sem número</p>}
				</div>

				<p className="text-2xl font-semibold">R$ {pricePerDay}</p>

				<div className="flex flex-col items-center">
					<p>{city}</p>
					<p>Dono: {owner.substring(0, owner.indexOf(' '))}</p>
				</div>

				<Link
					to={`/garagem/${id}`}
					className="rounded-2xl bg-blue-950 px-4 py-1 transition duration-300 hover:bg-blue-900"
				>
					Mais detalhes
				</Link>
			</div>
		</div>
	);
};
