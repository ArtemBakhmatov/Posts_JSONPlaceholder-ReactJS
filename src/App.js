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

	const removePost = (post) => {
		setPosts(posts.filter(p => p.id !== post.id));
	}

	return (
		<div className='app'>
			<PostForm create={createPost} />
			{posts.length !== 0
				?
					<PostList remove={removePost} posts={posts} title="Programming posts"/>
				:
				<div style={{textAlign: 'center', fontWeight: 'bold', fontSize: '18px'}}>
					Посты не найдены
				</div>
			}
			
		</div>
	);
};

export default App;