import React from 'react';
import './myButton.scss';

const MyButton = ({...props}) => {
    return (
        <button 
            className='myBtn'
            {...props}
        >
            Создать пост
        </button>
    );
};

export default MyButton;