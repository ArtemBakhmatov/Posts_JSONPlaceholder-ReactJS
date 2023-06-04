import React from 'react';
import Postitem from '../postItem/Postitem';

const PostList = ({posts, title}) => {
    return (
        <>
            <h1 className='title'>{title}</h1>
            <ul className='post'>
                {posts.map((post, i) => 
                    <Postitem number={i + 1} post={post} key={post.id} />
                )}
            </ul>
        </>   
    );
};

export default PostList;