import React, { useEffect, useState } from 'react';
import PostList from '../components/postList/PostList';
import PostForm from '../components/postForm/PostForm';
import PostFilter from '../components/postFilter/PostFilter';
import MyModal from '../components/modal/MyModal';
import { usePosts } from '../hook/usePosts';
import PostService from '../API/PostService';
import Loader from '../components/loader/Loader';
import { useFething } from '../hook/useFething';
import { getPageCount, getPagesArray } from '../utils/pages';
import Pagination from '../components/pagination/Pagination';
import NavBar from '../components/navbar/Navbar';

const Posts = () => {
	const [posts, setPosts] = useState([]);
	const [filter, setFilter] = useState({sort: '', query: ''});
	const [modal, setModal] = useState(false);
	const [totalPages, setTotalPages] = useState(0); 	// общее кол-во постов
	const [limit, setLimit] = useState(10);				// кол-во постов в одной странице
	const [page, setPage] = useState(1);				// первая страница

	const [fetchPosts, isPostLoading, postError] = useFething(async (limit, page) => {
		const responce = await PostService.getAll(limit, page);
			setPosts(responce.data);
			const totalCount = responce.headers['x-total-count']; // общее кол-во постов
			setTotalPages(getPageCount(totalCount, limit));
	});

	console.log(totalPages);

	useEffect(() => {
		fetchPosts(limit, page);
	}, []);

	const changePage = (page) => {
		setPage(page);
		fetchPosts(limit, page);
	}

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
			<NavBar setModal={setModal} />
			<MyModal visible={modal} setVisible={setModal} >
				<PostForm create={createPost} />
			</MyModal>
			<hr style={{margin: '55px 0 12px 0'}} />
			<PostFilter 
				filter={filter} 
				setFilter={setFilter}
			/>
			{ postError && <div>Произошла ошибка ${postError}</div> }
			{isPostLoading
				?
					<Loader />
				:
				<PostList remove={removePost} posts={sortedAndSearchedPosts} title="Programming posts"/>	
			}
			<Pagination
				page={page}
				changePage={changePage}
				totalPages={totalPages}
			/>
			
		</div>
	);
};

export default Posts;