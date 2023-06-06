import React, { useMemo, useState } from 'react';
import PostList from './components/postList/PostList';
import PostForm from './components/postForm/PostForm';
import PostFilter from './components/postFilter/PostFilter';
import MyModal from './components/modal/MyModal';
import MyButton from './components/button/MyButton';

const App = () => {
	const [posts, setPosts] = useState([
		{id: 1, title: 'JavaScript', body: 'dwddqa'},
		{id: 2, title: 'HTML', body: 'fdgerhgehon'},
		{id: 3, title: 'CSS', body: 'tty54yg'}
	]);
	const [filter, setFilter] = useState({sort: '', query: ''});
	const [modal, setModal] = useState(false);

	const createPost = (newPost) => {   // Добавить пост
		setPosts([...posts, newPost]);
		setModal(false);
	}

	const removePost = (post) => {		// Удалить пость
		setPosts(posts.filter(p => p.id !== post.id));
	}

	const sortedPosts = useMemo(() => {
		if (filter.sort) {
			return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]));
		}
		return posts;
	}, [filter.sort, posts]);

	const sortedAndSearchedPosts = useMemo(() => {
		return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()));
	}, [filter.query, sortedPosts]);

	return (
		<div className='app'>
			<MyButton onClick={() => setModal(true)}>
				Создать пост
			</MyButton>
			<MyModal visible={modal} setVisible={setModal} >
				<PostForm create={createPost} />
			</MyModal>
			
			<hr style={{margin: '15px 0'}} />
			<PostFilter 
				filter={filter} 
				setFilter={setFilter}
			/>
			<PostList remove={removePost} posts={sortedAndSearchedPosts} title="Programming posts"/>	
		</div>
	);
};

export default App;