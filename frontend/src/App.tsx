/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useEffect } from 'react';
import {
	Navigate,
	RouterProvider,
	createBrowserRouter,
} from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

function App() {
	//@ts-ignore
	const user = JSON.parse(localStorage.getItem('token'));

	const { fetchLoggedUserData, loggedUser } = useAuth();

	if (user) {
		useEffect(() => {
			fetchLoggedUserData(user.id);
		}, []);
	}

	const isLoggedInRouter = createBrowserRouter([
		{
			path: '/login',
			element: <Navigate replace to="/" />,
		},
	]);

	const notLoggedInRouter = createBrowserRouter([
		{
			path: '/login',
			element: <Login />,
		},
	]);

	return (
		<>
			<Toaster />
			{user ? (
				<RouterProvider router={isLoggedInRouter} />
			) : (
				<RouterProvider router={notLoggedInRouter} />
			)}
		</>
	);
}

export default App;
