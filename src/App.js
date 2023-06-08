import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import AppRouter from './components/AppRouter';



const App = () => {
	return (
		<Router>
			<Navbar />
			<AppRouter />
		</Router>
	);
};

export default App;