import React from 'react'
import s from './SubsidyListItem.module.scss'
import arrow from '../../../../assets/images/arrow_in.svg'
import {NavLink} from 'react-router-dom'

const SubsidyListItem = (props) => {
    return (
        <NavLink to={`/subsidy/${props.ID}`} className={s.itemContainer}>
            <div className={s.title}>
                {props.SMALL_NAME}
            </div>
            <div className={s.footer}>
                <button className={s.compareBtn}>
                    Добавить к сравнению
                </button>
                <img className={s.arrow} src={arrow} alt='arrow in' />
            </div>
        </NavLink>
    )
}

export default SubsidyListItem
