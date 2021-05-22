import React from 'react'
import s from './Navbar.module.scss'
import logo from '../../assets/images/logo.png'
import gisp from '../../assets/images/gisp_logo.png'
import {NavLink} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {logout} from '../../redux/auth-reducer'

const Navbar = (props) => {

    const dispatch = useDispatch()
    const isAuth = useSelector((state) => state.auth.isAuth)

    return (
        <div className={s.navbar}>
            <div className={s.container}>
                <NavLink className={s.images} exact to='/'>
                    <img className={s.logo} src={logo} alt='logo' />
                    <img src={gisp} alt='logo_gisp' />
                </NavLink>
                <div className={s.buttons}>
                    {
                        isAuth &&
                        <button onClick={() => (dispatch(logout()))} className={s.logoutBtn}>Выйти</button>
                    }
                </div>

            </div>
        </div>
    )
}

export default Navbar
