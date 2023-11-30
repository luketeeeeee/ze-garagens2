import logo from '../../assets/logo.png';

export const ZGLogo = () => {
	return (
		<div className="mt-[-50px] flex flex-col">
			<img
				src={logo}
				className="ml-[-50px] w-[550px]"
				alt="Logo do Zé Garagens"
			/>
			<p className="mt-[-20px] w-[400px] text-3xl font-bold text-white">
				Seu espaço, sua vaga: transformando garagens em experiências de
				estacionamento perfeitas!
			</p>
		</div>
	);
};
