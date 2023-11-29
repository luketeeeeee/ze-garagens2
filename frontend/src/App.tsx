import { useEffect } from 'react';
import {
	Navigate,
	RouterProvider,
	createBrowserRouter,
} from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import { useAuth } from './hooks/use-auth';
import { Login } from './pages/Login';
import { MainPage } from './pages/MainPage';

function App() {
	//@ts-ignore
	const user = JSON.parse(localStorage.getItem('token'));

	const { fetchLoggedUserData } = useAuth();

	if (user) {
		useEffect(() => {
			fetchLoggedUserData(user.id);
		}, []);
	}

	const isLoggedInRouter = createBrowserRouter([
		{
			path: '/',
			element: <MainPage />,
		},
		{
			path: '/login',
			element: <Navigate replace to="/" />,
		},
	]);

	const notLoggedInRouter = createBrowserRouter([
		{
			path: '/',
			element: <Navigate replace to="/login" />,
		},
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
