import React from 'react'
import s from './Compare.module.scss'

const Compare = () => {
    return (
        <div className={s.compare}>
            <div className={s.topContainer}>
                <div className='container'>
                    <div className={s.top}>
                        Сравнение мер поддержки
                    </div>
                </div>
            </div>
            <div className={s.content}>
                <div className='container'>
                    <div className={s.table}>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Compare
