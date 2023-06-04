import React from 'react';
import './postItem.scss';

const Postitem = (props) => {
    const {title, body} = props.post;
    const {number} = props;
    return (
        <li className="post__item">
            <div className='post__title'>{number}. {title}</div>
            <div className='post__descr'>
                {body}
            </div>
            <button className="post__btns">
                Удалить
            </button>
        </li>
    );
};

export default Postitem;