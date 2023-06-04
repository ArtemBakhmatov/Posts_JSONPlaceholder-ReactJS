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
	const [title, setTitle] = useState('');
	const [body, setBody] = useState('');

	const addNewPost = (e) => {
		e.preventDefault();
		const newPost = {
			id: Date.now(),
			title: title,
			body: body
		};
		setPosts([...posts, newPost]);
		setTitle('');
		setBody('');
	}

	const onChangleInput = (e) => {
		setTitle(e.target.value);
	}

	return (
		<div className='app'>
			<form>
				<MyInput 
					value={title} 
					onChange={e => onChangleInput(e)}
					placeholder='Название поста' />
				<MyInput 
					value={body}
					onChange={e => setBody(e.target.value)}
					placeholder='Описание поста'/>
				<MyButton onClick={e => addNewPost(e)} />
			</form>
			<PostList posts={posts} title="Programming posts"/>
		</div>
	);
};

export default App;