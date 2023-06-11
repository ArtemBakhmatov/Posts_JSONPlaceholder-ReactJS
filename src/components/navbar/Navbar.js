import React, { useContext } from 'react';

import { Link } from 'react-router-dom';
import { AuthContext } from '../../context';

import './navbar.scss';
import MyButton from '../button/MyButton';

const Navbar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);
    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem('auth');
    }
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
                {isAuth && <MyButton onClick={logout}>Выйти</MyButton>}
            </div>
        </div>
    );
};

export default Navbar;