import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import AppRouter from './components/AppRouter';
import { AuthContext } from './context';



const App = () => {
	const [isAuth, setIsAuth] = useState(false);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		if (localStorage.getItem('auth')) {
			setIsAuth(true);
		} else {
			setIsAuth(false);
		}
		setIsLoading(false)
	}, []);

	return (
		<AuthContext.Provider
			value={{
				isAuth: isAuth,
				setIsAuth: setIsAuth,
				isLoading: isLoading
			}}
		>
			<Router>
				<Navbar />
				<AppRouter />
			</Router>
		</AuthContext.Provider>
	);
};

export default App;