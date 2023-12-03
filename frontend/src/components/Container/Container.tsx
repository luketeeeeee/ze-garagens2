type ContainerProps = {
	children: React.ReactNode;
};

export const Container = ({ children }: ContainerProps) => {
	return (
		<div className="text-mainFont h-full w-full overflow-hidden bg-main-img">
			{children}
		</div>
	);
};
