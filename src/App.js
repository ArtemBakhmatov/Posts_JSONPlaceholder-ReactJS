import React, { useState } from 'react';
import PostList from './components/postList/PostList';
import PostForm from './components/postForm/PostForm';

const App = () => {
	const [posts, setPosts] = useState([
		{id: 1, title: 'JavaScript', body: 'Description'},
		{id: 2, title: 'HTML', body: 'Description'},
		{id: 3, title: 'CSS', body: 'Description'}
	]);

	const createPost = (newPost) => {
		setPosts([...posts, newPost]);
	}

	return (
		<div className='app'>
			<PostForm create={createPost} />
			<PostList posts={posts} title="Programming posts"/>
		</div>
	);
};

export default App;