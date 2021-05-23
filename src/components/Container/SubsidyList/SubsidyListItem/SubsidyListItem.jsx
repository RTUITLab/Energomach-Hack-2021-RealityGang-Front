import React from 'react'
import s from './SubsidyListItem.module.scss'
import arrow from '../../../../assets/images/arrow_in.svg'
import {NavLink} from 'react-router-dom'
import {motion} from "framer-motion"

import {useDispatch, useSelector} from 'react-redux'
import {addItemToCompare, deleteItemFromCompare} from '../../../../redux/subsidy-reducer'

const SubsidyListItem = (props) => {

    const dispatch = useDispatch()

    const subsidyCompare = useSelector(state => state.subsidy.subsidyCompare)

    const animationItem = {
        hidden: {x: -100, y: 20, opacity: 0},
        visible: {
            x: 0,
            y: 0,
            opacity: 1
        }
    }

    return (
        <motion.div variants={animationItem}>
            <div className={s.itemContainer}>
                <NavLink to={`/subsidy/${props.ID}`} className={s.title}>
                    {props.SMALL_NAME}
                    <div className={s.relevance}>
                        Релевантность: {(Number(props.RELEVANCE) * 10).toFixed(2)}
                    </div>
                </NavLink>

                <div className={s.footer}>

                    {
                        subsidyCompare.some(item => item.ID ===props.ID )
                        ? <button onClick={() => dispatch(deleteItemFromCompare(props.ID))} className={s.deleteCompareBtn}>Удалить из сравнения</button>
                        :
                            <button onClick={() => dispatch(addItemToCompare(props))} disabled={subsidyCompare.length > 1} className={s.compareBtn}>
                                Добавить к сравнению
                            </button>
                    }

                    <img className={s.arrow} src={arrow} alt='arrow in' />
                </div>
            </div>
        </motion.div>
    )
}

export default SubsidyListItem
