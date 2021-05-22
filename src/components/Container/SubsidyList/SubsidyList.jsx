import React from 'react'
import s from './SubsidyList.module.scss'
import SubsidyListItem from './SubsidyListItem/SubsidyListItem'

const SubsidyList = (props) => {
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
                    <div className={s.list}>
                        {/* eslint-disable-next-line react/jsx-no-undef */}
                        <SubsidyListItem />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SubsidyList
