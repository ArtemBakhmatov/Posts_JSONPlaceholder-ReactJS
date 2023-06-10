import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import PostService from '../../API/PostService';
import Loader from '../loader/Loader';
import { useFething } from '../../hook/useFething';


const PostIdPage = () => {
    const postId = useParams();
    const [post, setPost] = useState({});
    const [fetchPostById, isLoading, error] = useFething(async (id) => {
        const responce = await PostService.getById(id);
        setPost(responce.data);
    });

    useEffect(() => {
        fetchPostById(postId.id);
    }, []);
    return (
        <div style={{marginTop: 50, textAlign: 'center'}}>
            <h1>Вы открыли страницу поста с ID = {postId.id}</h1>
            {isLoading 
                ?
                    <Loader />
                :
                    <div>{post.id}, {post.title}</div>
            }
        </div>
    );
};

export default PostIdPage;