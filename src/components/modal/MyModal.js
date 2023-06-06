import React from 'react';
import './myModal.scss';
const classes = 'myModal';
const classesActive = 'myModal myModal__active';

const MyModal = ({children, visible, setVisible}) => {
    return (
        <div 
            className={visible ? classesActive : classes}
            onClick={() => setVisible(false)}
        >
            <div 
                className="myModal__content"
                onClick={(e) => e.stopPropagation()}
            >
                {children}
            </div>
        </div>
    );
};

export default MyModal;