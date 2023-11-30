import { SubmitHandler, useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import { ArrowLeftCircleIcon } from '@heroicons/react/24/outline';

import { useAuth, useGarages } from '../../hooks';
import { Container } from '../../components/Container';
import { Header } from '../../components/Header';
import {
	CreateGarageSchemaType,
	createGarageSchema,
} from './CreateGarage.helpers';

export const CreateGarage = () => {
	const navigate = useNavigate();

	const { createGarage } = useGarages();
	const { loggedUser } = useAuth();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<CreateGarageSchemaType>({
		resolver: zodResolver(createGarageSchema),
	});

	const onSubmit: SubmitHandler<CreateGarageSchemaType> = async (data) => {
		createGarage({
			...data,
			owner: loggedUser.name,
			ownerId: loggedUser.id,
			ownerPhoneNumber: loggedUser.phoneNumber,
		});
		setTimeout(() => navigate('/'), 1000);
	};

	return (
		<Container>
			<Header />
			<div className="flex items-center justify-center py-28 text-white">
				<div className="w-[550px] rounded-xl bg-[#FF0000] bg-opacity-50 px-10 py-7">
					<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
						<div className="flex">
							<Link
								to="/"
								className="ml-[-20px] mt-[-10px] hover:cursor-pointer"
								title="Voltar à tela inicial"
							>
								<ArrowLeftCircleIcon width={44} />
							</Link>
							<h1 className="mb-8 ml-[20px] pt-8 text-center text-3xl font-semibold">
								Cadastre uma garagem
							</h1>
						</div>

						<div className="flex h-full w-full flex-col text-black">
							<input
								id="city"
								type="text"
								autoFocus
								placeholder="Cidade*"
								{...register('city')}
								className="w-full rounded-2xl bg-white px-4 py-3 placeholder:text-zinc-500"
							/>
							{errors.city ? (
								<p className="text-sm text-white">{errors.city?.message}</p>
							) : (
								<p className="mt-5"></p>
							)}

							<input
								id="neighborhood"
								type="text"
								placeholder="Bairro*"
								{...register('neighborhood')}
								className="w-full rounded-2xl bg-white px-4 py-3 placeholder:text-zinc-500"
							/>
							{errors.neighborhood ? (
								<p className="text-sm text-white">
									{errors.neighborhood?.message}
								</p>
							) : (
								<p className="mt-5"></p>
							)}

							<input
								id="street"
								type="text"
								placeholder="Rua*"
								{...register('street')}
								className="w-full rounded-2xl bg-white px-4 py-3 placeholder:text-zinc-500"
							/>
							{errors.street ? (
								<p className="text-sm text-white">{errors.street?.message}</p>
							) : (
								<p className="mt-5"></p>
							)}

							<div className="flex w-full gap-3">
								<input
									id="number"
									type="number"
									placeholder="Número"
									{...register('number')}
									className="w-full rounded-2xl bg-white px-4 py-3 placeholder:text-zinc-500"
								/>
								{errors.number ? (
									<p className="text-sm text-white">{errors.number?.message}</p>
								) : (
									<p className="mt-5"></p>
								)}

								<input
									id="pricePerDay"
									type="number"
									placeholder="Preço por dia"
									{...register('pricePerDay')}
									className="w-full rounded-2xl bg-white px-4 py-3 placeholder:text-zinc-500"
								/>
								{errors.pricePerDay ? (
									<p className="text-sm text-white">
										{errors.pricePerDay?.message}
									</p>
								) : (
									<p className="mt-5"></p>
								)}
							</div>
						</div>

						<button
							type="submit"
							className="mt-5 w-64  self-center rounded-2xl bg-blue-950 py-3 text-white transition duration-500 hover:bg-blue-900"
						>
							Anunciar
						</button>
					</form>
				</div>
			</div>
		</Container>
	);
};
