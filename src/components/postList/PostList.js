import React from 'react';
import Postitem from '../postItem/Postitem';

const PostList = ({posts, title}) => {
    return (
        <>
            <h1 className='title'>{title}</h1>
            <ul className='post'>
                {posts.map((post) => 
                    <Postitem post={post} key={post.id} />
                )}
            </ul>
        </>   
    );
};

export default PostList;