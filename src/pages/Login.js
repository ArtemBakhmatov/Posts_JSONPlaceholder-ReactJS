import React, { useContext } from 'react';

import MyInput from '../components/Input/MyInput';
import MyButton from '../components/button/MyButton';
import { AuthContext } from '../context';

import '../scss/general-style.scss';

const Login = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);
    const login = (e) => {
        e.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth', 'true'); // в localStorage можно сохранять только строки
    };

    return (
        <div style={{marginTop: 70, textAlign: 'center'}}>

            <h1>Страница для логина</h1>
            <form 
                onSubmit={login} 
                className='form__login'
                >
                <MyInput type='text' placeholder='Введите логин' />
                <MyInput type='password' placeholder='Введите пароль' />
                <MyButton>Войти</MyButton>
            </form>
        </div>
    );
};

export default Login;