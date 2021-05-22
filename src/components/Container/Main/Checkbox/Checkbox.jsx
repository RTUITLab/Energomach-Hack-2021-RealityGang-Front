import React from 'react'
import s from './Checkbox.module.scss'
import checkbox from './../../../../assets/images/check.svg'

const Checkbox = (props) => {
    return (
        <div className={s.checkbox}>
            <img src={checkbox} alt='checkbox' />
            <div className={s.text}>
                {props.text}
            </div>
        </div>
    )
}

export default Checkbox