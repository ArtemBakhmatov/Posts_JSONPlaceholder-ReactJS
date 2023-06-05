import React, { useState } from 'react';
import PostList from './components/postList/PostList';
import MyButton from './components/button/MyButton';
import MyInput from './components/Input/MyInput';

const App = () => {
	const [posts, setPosts] = useState([
		{id: 1, title: 'JavaScript', body: 'Description'},
		{id: 2, title: 'HTML', body: 'Description'},
		{id: 3, title: 'CSS', body: 'Description'}
	]);
	const [post, setPost] = useState({title: '', body: ''});

	const addNewPost = (e) => {
		e.preventDefault();
		setPosts([...posts, {...post, id: Date.now()}]);
		setPost({title: '', body: ''});
		
	}

	const onChangleInputTitle = (e) => {
		setPost({...post, title: e.target.value});
	}

	const onChangleInputBody = (e) => {
		setPost({...post, body: e.target.value});
	}

	return (
		<div className='app'>
			<form>
				<MyInput 
					value={post.title} 
					onChange={e => onChangleInputTitle(e)}
					placeholder='Название поста' />
				<MyInput 
					value={post.body}
					onChange={e => onChangleInputBody(e)}
					placeholder='Описание поста'/>
				<MyButton onClick={e => addNewPost(e)} />
			</form>
			<PostList posts={posts} title="Programming posts"/>
		</div>
	);
};

export default App;