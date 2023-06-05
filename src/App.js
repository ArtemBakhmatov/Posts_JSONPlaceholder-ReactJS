import React, { useState } from 'react';
import PostList from './components/postList/PostList';
import PostForm from './components/postForm/PostForm';
import MySelect from './components/select/MySelect';

const App = () => {
	const [posts, setPosts] = useState([
		{id: 1, title: 'JavaScript', body: 'dwddqa'},
		{id: 2, title: 'HTML', body: 'fdgerhgehon'},
		{id: 3, title: 'CSS', body: 'tty54yg'}
	]);
	const [selectedSort, setSelectedSort] = useState('');

	const createPost = (newPost) => {   // Добавить пост
		setPosts([...posts, newPost]);
	}

	const removePost = (post) => {		// Удалить пость
		setPosts(posts.filter(p => p.id !== post.id));
	}

	const sortPosts = (sort) => {
		setSelectedSort(sort);
		setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])));
	}

	return (
		<div className='app'>
			<PostForm create={createPost} />
			<hr style={{margin: '15px 0'}} />
			<MySelect
				value={selectedSort}
				onChange={sortPosts}
				defaultValue='Сортирвка'
				options={[
					{value: 'title', name: 'По названию'},
					{value: 'body', name: 'По описанию'}
				]}
			/>
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