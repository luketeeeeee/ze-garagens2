type ContainerProps = {
	children: React.ReactNode;
};

export const Container = ({ children }: ContainerProps) => {
	return (
		<div className="font-poppins text-mainFont mx-auto my-0 flex h-full w-full flex-col items-center">
			{children}
		</div>
	);
};
