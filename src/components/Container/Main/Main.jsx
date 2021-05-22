import React from 'react'
import s from './Main.module.scss'
import main from './../../../assets/images/main.svg'
import Checkbox from './Checkbox/Checkbox'
import {NavLink, Redirect} from 'react-router-dom'
import {useSelector} from 'react-redux'

const Main = (props) => {

    const isAuth = useSelector(state => state.auth.isAuth)

    if(isAuth) {
        return <Redirect to='/form' />
    }
    return (
        <div className={s.main}>
            <div className={s.content}>
                <h2 className={s.name}>Цифровой помощник ГИСП</h2>
                <h1 className={s.title}>Навигатор мер поддержки</h1>
                <div className={s.description}>
                    Платформа для самостоятельного поиска программ государственной поддержки, которая доступна
                    представителям промышленных предприятий
                </div>
                <div className={s.checkboxContainer}>
                    <Checkbox text='Буллит с инфой про внедрение ml-решения в данную систему' />
                    <Checkbox text='Буллит с инфой про удобные фильтры для поиска субсидий' />
                    <Checkbox text='Буллит с инфой про что-то классное что внедрено в наше решение' />
                </div>
                <div className={s.buttons}>
                    <NavLink to={'/login'} className={s.loginBtn}>
                        Авторизация
                    </NavLink>
                    <NavLink to={'/form'} className={s.transparentBtn}>
                        Войти как гость
                    </NavLink>
                </div>
            </div>
            <div className={s.imgContainer}>
                <img className={s.img} src={main} alt='hackathon' />
            </div>
        </div>
    )
}

export default Main
