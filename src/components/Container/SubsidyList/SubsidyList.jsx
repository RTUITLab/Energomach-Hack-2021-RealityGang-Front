import React from 'react'
import s from './SubsidyList.module.scss'
import SubsidyListItem from './SubsidyListItem/SubsidyListItem'
import {withRequestFetching} from '../../../hoc/withRequestFetching'
import {compose} from 'redux'
import {motion} from "framer-motion";

const SubsidyList = (props) => {

    const animationContainer = {
        hidden: {opacity: 1, scale: 1},
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 0.1,
                staggerChildren: 0.1
            }
        }
    }

    return (
        <div className={s.subsidy}>
            <div className={s.topContainer}>
                <div className='container'>
                    <div className={s.top}>
                        <div className={s.info}>
                            <h2 className={s.name}>Список мер поддержки</h2>
                            <h1 className={s.title}>Результат обработки</h1>
                        </div>
                        <div className={s.notify}>
                            Чем выше релевантность, тем больше мера поддержки <br /> подходит для Вашей кмопании
                        </div>
                    </div>
                </div>
            </div>
            <div className={s.content}>
                <div className='container'>
                    <motion.div className={s.list}
                                variants={animationContainer}
                                initial="hidden"
                                animate="visible"
                    >

                        {
                            props.subsidyList?.length > 0
                                ?
                                props.subsidyList.map((sub, index) => {
                                    return <SubsidyListItem {...sub} key={index} />
                                })
                                :
                                <>
                                    <div></div>
                                    <div className={s.notFount}>
                                        Ничего не найдено
                                    </div>
                                </>
                        }

                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default compose(
    withRequestFetching
)(SubsidyList)
