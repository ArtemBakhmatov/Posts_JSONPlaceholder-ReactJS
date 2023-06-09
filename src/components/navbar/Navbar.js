import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.scss';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar__container navbar__container-flex">
                <div className="navbar__title">JSONPlaceholder API</div>
                <ul className="navbar__list">
                    <li className="navbar__item">
                        <Link to='/about' className="navbar__link">О сайте</Link>
                    </li>
                    <li className="navbar__item">
                        <Link to='/posts' className="navbar__link">Посты</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;