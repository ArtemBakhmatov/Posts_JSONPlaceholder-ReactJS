import React from 'react';
import PostList from './components/postList/PostList';

const App = () => {
	const posts = [
		{id: 1, title: 'JavaScript', description: 'Description'},
		{id: 2, title: 'HTML', description: 'Description'},
		{id: 3, title: 'CSS', description: 'Description'}
	];

	return (
		<div className='app'>
			<PostList posts={posts} title="Programming posts"/>
		</div>
	);
};

export default App;