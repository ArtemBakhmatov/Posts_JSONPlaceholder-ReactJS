import React from 'react';
import MyButton from '../button/MyButton';
import './postItem.scss';


const Postitem = (props) => {
    const {title, body} = props.post;
    const {number, remove, post} = props;
    return (
        <li className="post__item">
            <div className='post__title'>{number}. {title}</div>
            <div className='post__descr'>
                {body}
            </div>
            <MyButton onClick={() => remove(post)}>
                Удалить
            </MyButton>
        </li>
    );
};

export default Postitem;