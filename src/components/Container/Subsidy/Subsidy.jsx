import React from 'react'
import s from './Subsidy.module.scss'
import backBtn from '../../../assets/images/back-btn.svg'
import {useHistory} from 'react-router-dom'

const Subsidy = () => {
    const history = useHistory()

    return (
        <div className={s.subsidy}>
            <div className={s.topContainer}>
                <div className='container'>
                    <div className={s.top}>
                        <img onClick={() => history.goBack()} className={s.backBtn} src={backBtn} alt='back button' />
                        <h1 className={s.title}>Субсидия на возмещение части затрат на уплату процентов по кредитам на закупку воздушных судов</h1>
                    </div>
                </div>
            </div>
            <div className={s.content}>
                <div className='container'>
                    <div className={s.section}>
                        <h3 className={s.sectionTitleContainer}>
                            <div className={s.sectionTitle}>
                                Общая информация о субсидии
                            </div>
                        </h3>
                        <div className={s.sectionContent}>
                            <div className={s.itemContainer}>
                                <span className={s.item}>НАЗВАНИЕ ПОЛЯ:</span>
                                ПОЛЕ
                            </div>
                            <div className={s.itemContainer}>
                                <span className={s.item}>НАЗВАНИЕ ПОЛЯ:</span>
                                ПОЛЕ
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Subsidy
