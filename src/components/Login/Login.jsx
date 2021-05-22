import React from 'react'
import s from './Login.module.scss'
import {NavLink} from 'react-router-dom'
import cl from 'classnames'
import message from '../../assets/images/message.svg'
import padlock from '../../assets/images/padlock.svg'
import main_login from '../../assets/images/main_login.svg'

const Login = (props) => {
    return (
        <div className={cl(s.loginContainer)}>

            <div className={cl(s.login)}>
                <h2 className={s.name}>Заполните все необходимые поля</h2>
                <h1 className={s.title}>Авторизация пользователя</h1>

                <div className={s.inputs}>
                    <div className={s.inputContainer}>
                        <input value={props.email}
                               // onKeyUp={props.handleKeyUp}
                               // onChange={(e) => props.setEmail(e.target.value)}
                               placeholder={'E-mail'}
                               className={cl(s.input)} id={'login'} type='text' />
                        <label className={s.imgLabel} htmlFor='login'><img src={message} alt='message' /></label>
                    </div>
                    <div className={s.inputContainer}>
                        <input value={props.password}
                               // onKeyUp={props.handleKeyUp}
                               // onChange={(e) => props.setPassword(e.target.value)}
                               placeholder={'Пароль'}
                               className={cl( s.input)} id={'password'} type='password' />
                        <label className={s.imgLabel} htmlFor='password'><img src={padlock} alt='padlock' /></label>
                    </div>
                </div>

                <button onClick={props.handleSubmit} type={'submit'} className={cl(s.loginBtn)}>Войти</button>

                <div className={s.footer}>
                    <span>Ещё не зарегистрированы?</span>
                    <NavLink to={'/register'}>Создать аккаунт</NavLink>
                </div>
            </div>

            <div className={s.imgContainer}>
                <img className={s.img} src={main_login} alt='man with phone' />
            </div>

        </div>
    )
}

export default Login


