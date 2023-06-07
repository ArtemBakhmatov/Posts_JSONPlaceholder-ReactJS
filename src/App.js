import React, { useState } from 'react';
import axios from 'axios';
import PostList from './components/postList/PostList';
import PostForm from './components/postForm/PostForm';
import PostFilter from './components/postFilter/PostFilter';
import MyModal from './components/modal/MyModal';
import MyButton from './components/button/MyButton';
import { usePosts } from './hook/usePosts';

const App = () => {
	const [posts, setPosts] = useState([]);
	const [filter, setFilter] = useState({sort: '', query: ''});
	const [modal, setModal] = useState(false);

	const fetchPosts = async () => {
		const responce = await axios.get('https://jsonplaceholder.typicode.com/posts');
		setPosts(responce.data);
		console.log(responce);
	};

	const createPost = (newPost) => {   // Добавить пост
		setPosts([...posts, newPost]);
		setModal(false);
	}

	const removePost = (post) => {		// Удалить пост
		setPosts(posts.filter(p => p.id !== post.id));
	}

	const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query); // сортировка поста

	return (
		<div className='app'>
			<MyButton onClick={fetchPosts}>
				Получить посты с сервера
			</MyButton>
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