import { useState } from 'react';
import { SubmitHandler, useForm, Controller } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { IMaskInput } from 'react-imask';
import { zodResolver } from '@hookform/resolvers/zod';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';

import { Container } from '../../components/Container';
import { ZGLogo } from '../../components/ZGLogo';
import { useUsers } from '../../hooks';
import { CreateUserSchemaType, createUserSchema } from './Register.helpers';

export const Register = () => {
	const navigate = useNavigate();

	const [passwordShow, setPasswordShow] = useState(false);

	const { createUser } = useUsers();
	const {
		register,
		handleSubmit,
		control,
		formState: { errors },
	} = useForm<CreateUserSchemaType>({
		resolver: zodResolver(createUserSchema),
	});

	const onSubmit: SubmitHandler<CreateUserSchemaType> = async (data) => {
		createUser(data);
		setTimeout(() => navigate('/login'), 1000);
	};

	return (
		<Container>
			<div className="flex h-full items-center justify-center gap-5">
				<ZGLogo />
				<div className="flex h-[650px] w-[500px] items-center rounded-lg bg-[#FF0000] bg-opacity-50">
					<form
						onSubmit={handleSubmit(onSubmit)}
						className="flex w-full flex-col px-10"
					>
						<h1 className="mb-8 text-center text-3xl font-semibold text-white">
							Realize seu cadastro
						</h1>

						<div className="flex h-full w-full flex-col">
							<input
								id="name"
								type="text"
								autoFocus
								placeholder="Nome"
								{...register('name')}
								className="w-full rounded-2xl bg-white px-4 py-3 placeholder:text-zinc-500"
							/>
							{errors.name ? (
								<p className="text-sm text-white">{errors.name?.message}</p>
							) : (
								<p className="mt-5"></p>
							)}

							<input
								id="email"
								type="text"
								placeholder="E-mail"
								{...register('email')}
								className="w-full rounded-2xl bg-white px-4 py-3 placeholder:text-zinc-500"
							/>
							{errors.email ? (
								<p className="text-sm text-white">{errors.email?.message}</p>
							) : (
								<p className="mt-5"></p>
							)}

							<input
								id="cpf"
								type="text"
								placeholder="CPF"
								{...register('cpf')}
								maxLength={11}
								className="w-full rounded-2xl bg-white px-4 py-3 placeholder:text-zinc-500"
							/>
							{errors.cpf ? (
								<p className="text-sm text-white">{errors.cpf?.message}</p>
							) : (
								<p className="mt-5"></p>
							)}

							<Controller
								control={control}
								name="phoneNumber"
								render={({
									field: { onChange, value, name },
									formState: { errors },
								}) => (
									<>
										<IMaskInput
											type="tel"
											placeholder="Telefone"
											id="phoneNumber"
											name={name}
											onChange={onChange}
											value={value}
											mask={'(00) 00000-0000'}
											className="w-full rounded-2xl bg-white px-4 py-3 placeholder:text-zinc-500"
										/>
										{errors.phoneNumber ? (
											<p className="text-sm text-white">
												{errors.phoneNumber?.message}
											</p>
										) : (
											<p className="mt-5"></p>
										)}
									</>
								)}
							/>

							<div className="flex w-full rounded-2xl bg-white pr-4">
								<input
									id="password"
									type={passwordShow ? 'text' : 'password'}
									placeholder="Senha"
									{...register('password')}
									className="w-full rounded-2xl bg-white py-3 pl-4 placeholder:text-zinc-500"
								/>

								<button
									onClick={() => setPasswordShow(!passwordShow)}
									className="pl-3"
									type="button"
								>
									{passwordShow ? (
										<EyeSlashIcon className="h-7 w-7" />
									) : (
										<EyeIcon className="h-7 w-7" />
									)}
								</button>
							</div>
							{errors.password ? (
								<p className="text-sm text-white">{errors.password?.message}</p>
							) : (
								<p className="mt-5"></p>
							)}

							<div className="flex w-full rounded-2xl bg-white pr-4">
								<input
									id="confirmPassword"
									type={passwordShow ? 'text' : 'password'}
									placeholder="Confirme a senha"
									{...register('confirmPassword')}
									className="w-full rounded-2xl bg-white py-3 pl-4 placeholder:text-zinc-500"
								/>

								<button
									onClick={() => setPasswordShow(!passwordShow)}
									className="pl-3"
									type="button"
								>
									{passwordShow ? (
										<EyeSlashIcon className="h-7 w-7" />
									) : (
										<EyeIcon className="h-7 w-7" />
									)}
								</button>
							</div>
							{errors.confirmPassword ? (
								<p className="text-sm text-white">
									{errors.confirmPassword?.message}
								</p>
							) : (
								<p className="mt-5"></p>
							)}
						</div>

						<div className="flex h-14 flex-col items-center gap-3">
							<button
								type="submit"
								className="w-64 self-center rounded-2xl bg-blue-950 py-3 text-white transition duration-500 hover:bg-blue-900"
							>
								Cadastrar-se
							</button>
							<Link
								to="/login"
								className="trasition text-sm text-white underline decoration-transparent duration-300 hover:decoration-white"
							>
								Já possui uma conta? Faça login!
							</Link>
						</div>
					</form>
				</div>
			</div>
		</Container>
	);
};
