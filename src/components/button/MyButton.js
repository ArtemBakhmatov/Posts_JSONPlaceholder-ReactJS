import React from 'react';
import './myButton.scss';

const MyButton = ({children,...props}) => {
    return (
        <button 
            className='myBtn'
            {...props}
        >
            {children}
        </button>
    );
};

export default MyButton;