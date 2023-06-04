import React from 'react';
import Postitem from './components/postItem/Postitem';

const App = () => {

	return (
		<div className='app'>
			<Postitem post={{id: 1, title: 'JavaScript', description: 'Description'}} />
			<Postitem post={{id: 2, title: 'HTML', description: 'Description'}} />
			<Postitem post={{id: 3, title: 'CSS', description: 'Description'}} />
		</div>
	);
};

export default App;