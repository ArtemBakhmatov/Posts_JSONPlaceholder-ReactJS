import React from 'react';
import { useState } from 'react';
import MyButton from '../button/MyButton';
import MyInput from '../Input/MyInput';

const PostForm = ({create}) => {
    const [post, setPost] = useState({title: '', body: ''});

	const addNewPost = (e) => {
		e.preventDefault();
        const newPost = {...post, id: Date.now()};
		create(newPost);
        setPost({title: '', body: ''});
	}

	const onChangleInputTitle = (e) => {
		setPost({...post, title: e.target.value});
	}

	const onChangleInputBody = (e) => {
		setPost({...post, body: e.target.value});
	}
    return (
        <form>
            <MyInput 
                value={post.title} 
                onChange={e => onChangleInputTitle(e)}
                placeholder='Название поста' />
            <MyInput 
                value={post.body}
                onChange={e => onChangleInputBody(e)}
                placeholder='Описание поста'/>
            <MyButton onClick={e => addNewPost(e)}>Создать пост</MyButton>
        </form>
    );
};

export default PostForm;