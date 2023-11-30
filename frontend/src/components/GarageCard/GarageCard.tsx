import { Link } from 'react-router-dom';

export const GarageCard = ({
	available,
	pricePerDay,
	street,
	neighborhood,
	city,
	owner,
	number,
}: {
	available: boolean;
	pricePerDay: number;
	street: string;
	neighborhood: string;
	city: string;
	owner: string;
	number?: number;
}) => {
	return (
		<div className="">
			{available ? (
				<div className="h-10 bg-green-500">Disponível</div>
			) : (
				<div className="h-10 bg-red-700">Alugada</div>
			)}
			<div className="bg-black">
				<div>
					<p>{street}</p>
					<p>{neighborhood}</p>

					{number ? <p>Número{number}</p> : <></>}
				</div>

				<p>R$ {pricePerDay}</p>

				<div>
					<p>{city}</p>
					<p>Dono {owner}</p>
				</div>

				<Link to="/">Mais detalhes</Link>
			</div>
		</div>
	);
};
