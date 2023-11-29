import { useState } from 'react';
import { Link } from 'react-router-dom';
import { EyeSlashIcon, EyeIcon } from '@heroicons/react/24/outline';

import { Container } from '../../components/Container';
import { useAuth } from '../../hooks';
import { ZGLogo } from '../../components/ZGLogo';

export const Login = () => {
	const { signin } = useAuth();

	const [passwordShow, setPasswordShow] = useState(false);
	const [userData, setUserData] = useState({
		email: '',
		password: '',
	});

	const toggleShowPassword = () => {
		setPasswordShow(!passwordShow);
	};

	const handleChange = (e: any) => {
		setUserData({ ...userData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e: any) => {
		e.preventDefault();

		if (userData.email && userData.password) {
			signin(userData);
		}
	};

	return (
		<Container>
			<div className="bg-main-img flex h-full items-center justify-center gap-5">
				<ZGLogo />
				<div className="flex h-[375px] w-[500px] items-center rounded-lg bg-[#FF0000] bg-opacity-50">
					<form onSubmit={handleSubmit} className="flex w-full flex-col px-10">
						<div className="flex flex-col gap-4">
							<input
								type="text"
								placeholder="Email"
								name="email"
								onChange={handleChange}
								value={userData.email}
								required
								className="rounded-xl px-4 py-3"
							/>

							<div className="flex w-full rounded-xl bg-white pr-4">
								<input
									type={passwordShow ? 'text' : 'password'}
									placeholder="Senha"
									name="password"
									onChange={handleChange}
									value={userData.password}
									minLength={8}
									required
									className="w-full rounded-xl py-3 pl-4"
								/>
								<button
									onClick={toggleShowPassword}
									className="pl-3"
									type="button"
								>
									{passwordShow ? (
										<EyeSlashIcon width={30} />
									) : (
										<EyeIcon width={30} />
									)}
								</button>
							</div>
						</div>

						<button
							type="submit"
							className="mt-7 w-64 self-center rounded-2xl bg-blue-950 py-3 text-white transition duration-500 hover:bg-blue-900"
						>
							Login
						</button>

						<p className="mt-1 self-center text-white">ou</p>

						<div className="flex flex-col items-center">
							<Link
								to="/cadastro"
								className="trasition text-base text-white underline decoration-transparent duration-300 hover:decoration-blue-900"
							>
								Realize seu cadastro!
							</Link>

							<Link
								to="/esqueceu-senha"
								className="trasition mt-4 text-sm text-white underline decoration-transparent duration-300 hover:decoration-white"
							>
								Esqueceu sua senha?
							</Link>
						</div>
					</form>
				</div>
			</div>
		</Container>
	);
};
