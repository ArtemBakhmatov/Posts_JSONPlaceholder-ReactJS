import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import PostService from '../../API/PostService';
import Loader from '../../components/loader/Loader';
import { useFething } from '../../hook/useFething';


const PostIdPage = () => {
    const params = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);

    const [fetchPostById, isLoading, error] = useFething(async (id) => {
        const responce = await PostService.getById(id);
        setPost(responce.data);
    });

    const [fetchComments, isComLoading, comError] = useFething(async (id) => {
        const responce = await PostService.getCommentsByPostId(id);
        setComments(responce.data);
    });

    useEffect(() => {
        fetchPostById(params.id);
        fetchComments(params.id);
    }, []);

    return (
        <div style={{marginTop: 50, textAlign: 'center'}}>
            <h1>Вы открыли страницу поста с ID = {params.id}</h1>
            {isLoading 
                ?
                    <Loader />
                :
                    <div>{post.id}, {post.title}</div>
            }
            <h1>
                Комментарии
            </h1>
            {isComLoading
                ? 
                    <Loader/>
                : 
                    <div>
                        {comments.map(comm =>
                            <div key={comm.id} style={{marginTop: 15}}>
                                <h5>{comm.email}</h5>
                                <div>{comm.body}</div>
                            </div>
                        )}
                    </div>
            }
        </div>
    );
};

export default PostIdPage;