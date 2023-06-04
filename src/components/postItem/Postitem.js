import React from 'react';
import './postItem.scss';

const Postitem = (props) => {
    const {id, title, description} = props.post;
    return (
        <li className="post__item">
            <div className='post__title'>{id}. {title}</div>
            <div className='post__descr'>
                {description}
            </div>
            <div className="post__btns">
                <button>Удалить</button>
            </div>
        </li>
    );
};

export default Postitem;