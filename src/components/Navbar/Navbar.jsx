import React from 'react'
import s from './Navbar.module.scss'
import logo from '../../assets/images/logo.png'
import gisp from '../../assets/images/gisp_logo.png'

const Navbar = (props) => {
    return (
        <div className={s.navbar}>
            <div className={s.container}>
                <img className={s.logo} src={logo} alt='logo' />
                <img src={gisp} alt='logo_gisp' />
            </div>
        </div>
    )
}

export default Navbar