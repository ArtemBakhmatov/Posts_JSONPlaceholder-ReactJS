import React, { useMemo, useState } from 'react';
import PostList from './components/postList/PostList';
import PostForm from './components/postForm/PostForm';
import MySelect from './components/select/MySelect';
import MyInput from './components/Input/MyInput';

const App = () => {
	const [posts, setPosts] = useState([
		{id: 1, title: 'JavaScript', body: 'dwddqa'},
		{id: 2, title: 'HTML', body: 'fdgerhgehon'},
		{id: 3, title: 'CSS', body: 'tty54yg'}
	]);
	const [selectedSort, setSelectedSort] = useState('');
	const [searchQuery, setSearchQuery] = useState('');

	const createPost = (newPost) => {   // Добавить пост
		setPosts([...posts, newPost]);
	}

	const removePost = (post) => {		// Удалить пость
		setPosts(posts.filter(p => p.id !== post.id));
	}

	const sortedPosts = useMemo(() => {
		if (selectedSort) {
			return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]));
		}
		return posts;
	}, [selectedSort, posts]);

	const sortedAndSearchedPosts = useMemo(() => {
		return sortedPosts.filter(post => post.title.toLowerCase().includes(searchQuery));
	}, [searchQuery, sortedPosts]);

	const sortPosts = (sort) => {
		setSelectedSort(sort);
	}

	return (
		<div className='app'>
			<PostForm create={createPost} />
			<hr style={{margin: '15px 0'}} />
			<MyInput 
				value={searchQuery}
				onChange={e => setSearchQuery(e.target.value)}
				placeholder='Поиск...'
			/>
			<MySelect
				value={selectedSort}
				onChange={sortPosts}
				defaultValue='Сортирвка'
				options={[
					{value: 'title', name: 'По названию'},
					{value: 'body', name: 'По описанию'}
				]}
			/>
			{sortedAndSearchedPosts.length !== 0
				?
					<PostList remove={removePost} posts={sortedAndSearchedPosts} title="Programming posts"/>
				:
				<div style={{textAlign: 'center', fontWeight: 'bold', fontSize: '18px'}}>
					Посты не найдены
				</div>
			}
			
		</div>
	);
};

export default App;