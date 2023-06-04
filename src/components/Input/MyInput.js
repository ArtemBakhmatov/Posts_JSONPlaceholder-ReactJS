import React from 'react';
import './myInput.scss';

const MyInput = ({...props}) => {
    return (
        <input type='text' {...props} />
    );
};

export default MyInput;