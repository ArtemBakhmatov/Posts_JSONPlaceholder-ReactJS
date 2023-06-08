import React from 'react';
import MyButton from '../button/MyButton';
import './navbar.scss';

const NavBar = ({setModal}) => {
    return (
        <div className="navbar">
            <div className="navbar__container navbar__container-flex">
                <MyButton onClick={() => setModal(true)}>
                    Создать пост
                </MyButton>
                <ul className="navbar__list">
                    <li className="navbar__item">
                        <a href="#" className="navbar__link">О сайте</a>
                    </li>
                    <li className="navbar__item">
                        <a href="#" className="navbar__link">Посты</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default NavBar;