type ContainerProps = {
	children: React.ReactNode;
};

export const Container = ({ children }: ContainerProps) => {
	return (
		<div className="font-poppins text-mainFont h-full w-full overflow-hidden">
			{children}
		</div>
	);
};
