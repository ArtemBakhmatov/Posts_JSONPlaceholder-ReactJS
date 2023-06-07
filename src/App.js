import React, { useEffect, useState } from 'react';
import PostList from './components/postList/PostList';
import PostForm from './components/postForm/PostForm';
import PostFilter from './components/postFilter/PostFilter';
import MyModal from './components/modal/MyModal';
import MyButton from './components/button/MyButton';
import { usePosts } from './hook/usePosts';
import PostService from './API/PostService';
import Loader from './components/loader/Loader';

const App = () => {
	const [posts, setPosts] = useState([]);
	const [filter, setFilter] = useState({sort: '', query: ''});
	const [modal, setModal] = useState(false);
	const [isPostloading, setIsPostLoading] = useState(false);

	const fetchPosts = async () => {
		setIsPostLoading(true);
		setTimeout(async () => {
			const posts = await PostService.getAll();
			setPosts(posts);
			setIsPostLoading(false);
		}, 1000);
		
	};

	useEffect(() => {
		fetchPosts();
	}, []);

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
			{isPostloading 
				?
					<Loader />
				:
				<PostList remove={removePost} posts={sortedAndSearchedPosts} title="Programming posts"/>	
			}
		</div>
	);
};

export default App;