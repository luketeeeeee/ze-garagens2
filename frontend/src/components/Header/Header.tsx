import { Link } from 'react-router-dom';
import {
	UserCircleIcon,
	ArrowRightOnRectangleIcon,
} from '@heroicons/react/24/outline';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';

import { useAuth } from '../../hooks';
import headerLogo from '../../assets/header-logo.png';

export const Header = () => {
	const win: Window = window;

	const { loggedUser } = useAuth();

	return (
		<div className="flex h-20 justify-between bg-red-700 px-20">
			<Link to="/">
				<img
					src={headerLogo}
					alt="Logo do Zé Garanges"
					className="mt-[-12px] h-24"
				/>
			</Link>

			<div className="flex items-center gap-8 text-white">
				<div className="flex gap-6">
					<Link
						to="/cadastrar-garagem"
						className="rounded-2xl bg-blue-950 px-4 py-2 transition duration-300 hover:bg-blue-900"
					>
						Cadastrar uma garagem
					</Link>
					<Link
						to="/minhas-garagens"
						className="rounded-2xl bg-blue-950 px-4 py-2 transition duration-300 hover:bg-blue-900"
					>
						Minhas garagens
					</Link>
				</div>

				<div className="flex items-center gap-4">
					{loggedUser.name.includes(' ') ? (
						<p>
							Bem vindo,{' '}
							{loggedUser.name.substring(0, loggedUser.name.indexOf(' '))}
						</p>
					) : (
						<p>Bem vindo, {loggedUser.name}</p>
					)}
					<UserCircleIcon width={36} />
					<Popover>
						<PopoverTrigger>
							{' '}
							<button
								className="group flex h-10 w-10 items-center justify-center rounded-full transition duration-300 hover:bg-white hover:text-red-700"
								title="Sair"
							>
								<ArrowRightOnRectangleIcon width={36} />
							</button>
						</PopoverTrigger>

						<PopoverContent className="mt-1 flex w-40 px-0 py-0">
							<button
								onClick={() => {
									localStorage.removeItem('token');
									win.location.reload();
								}}
								className="w-full rounded-md px-6 py-2 text-start transition duration-200 hover:bg-slate-200 hover:text-red-500"
							>
								Sair
							</button>
						</PopoverContent>
					</Popover>
				</div>
			</div>
		</div>
	);
};
