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
                        <div className={s.section}>
                            <h2 className={s.title}>Общая информация о субсидиях</h2>
                            <div className={s.row}>
                                <div className={s.first}>
                                    <h5 className={s.rowTitle}>Полное наименование меры поддержки</h5>
                                    <div className={s.text}>

                                    </div>
                                </div>
                                <div className={s.second}>
                                    <div className={s.text}>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Compare
