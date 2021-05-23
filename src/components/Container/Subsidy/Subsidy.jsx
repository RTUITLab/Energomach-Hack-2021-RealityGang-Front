import React from 'react'
import s from './Subsidy.module.scss'
import backBtn from '../../../assets/images/back-btn.svg'
import {useHistory} from 'react-router-dom'
import {withRequestFetching} from '../../../hoc/withRequestFetching'
import {compose} from 'redux'

const Subsidy = ({subsidyData, ...props}) => {
    const history = useHistory()

    return (
        <div className={s.subsidy}>
            <div className={s.topContainer}>
                <div className='container'>
                    <div className={s.top}>
                        <img onClick={() => history.goBack()} className={s.backBtn} src={backBtn} alt='back button' />
                        <h1 className={s.title}>{subsidyData.SMALL_NAME}</h1>
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
                                <span className={s.item}>Полное наименование меры поддержки: </span>
                                {subsidyData.FULL_NAME}
                            </div>
                            {/*<div className={s.itemContainer}>*/}
                            {/*    <span className={s.item}>Полное наименование НПА (ЛНА) меры поддержки:</span>*/}
                            {/*    {subsidyData.NPA_NAME}*/}
                            {/*</div>*/}
                            <div className={s.itemContainer}>
                                <span className={s.item}>Описание меры поддержки:</span>
                                {subsidyData.DESCRIPTION}
                            </div>
                            <div className={s.itemContainer}>
                                <span className={s.item}>Цели предоставления поддержки:</span>
                                {subsidyData.PURPOSE}
                            </div>
                            <div className={s.itemContainer}>
                                <span className={s.item}>Задачи предоставления поддержки:</span>
                                {subsidyData.OBJECTIVE}
                            </div>
                            <div className={s.itemContainer}>
                                <span className={s.item}>Тип меры поддержки:</span>
                                {subsidyData.TYPE_MERA}
                            </div>
                        </div>
                    </div>

                    <div className={s.section}>
                        <h3 className={s.sectionTitleContainer}>
                            <div className={s.sectionTitle}>
                                Дополнительная информация о субсидии
                            </div>
                        </h3>
                        <div className={s.sectionContent}>
                            <div className={s.itemContainer}>
                                <span className={s.item}>Формат предоставления поддержки: </span>
                                {subsidyData.TYPE_FORMAT_SUPPORT}
                            </div>
                            <div className={s.itemContainer}>
                                <span className={s.item}>Процентная ставка предоставления поддержки: </span>
                                {subsidyData.PROCENT_VOZVRATA}
                            </div>
                            <div className={s.itemContainer}>
                                <span className={s.item}>Срок предоставления гарантии: </span>
                                {subsidyData.GUARANTE_PERIODE}
                            </div>
                            <div className={s.itemContainer}>
                                <span className={s.item}>Стоимость предоставления гарантии: </span>
                                {subsidyData.GUARANTEE_COST}
                            </div>
                            <div className={s.itemContainer}>
                                <span className={s.item}>Список поддерживаемых отраслей: </span>
                                {subsidyData.APPLIANCE_ID}
                            </div>
                            <div className={s.itemContainer}>
                                <span
                                    className={s.item}>Список типов проблем, на решение которых направлена мера поддержки: </span>
                                {subsidyData.COMPLEXITY}
                            </div>
                        </div>
                    </div>
                    <div className={s.section}>
                        <h3 className={s.sectionTitleContainer}>
                            <div className={s.sectionTitle}>
                                Условия получения субсидии
                            </div>
                        </h3>
                        <div className={s.sectionContent}>
                            <div className={s.itemContainer}>
                                <span className={s.item}>Требования к заявителю: </span>
                                {subsidyData.REQ_ZAYAVITEL}
                            </div>
                            <div className={s.itemContainer}>
                                <span className={s.item}>Требования к проекту: </span>
                                {subsidyData.REQUEST_PROJECT}
                            </div>
                            <div className={s.itemContainer}>
                                <span className={s.item}>Допустимый бюджет проекта: </span>
                                {subsidyData.BUDGET_PROJECT}
                            </div>
                            <div className={s.itemContainer}>
                                <span className={s.item}>Список показателей результативности проекта: </span>
                                {subsidyData.POKAZATEL_RESULT}
                            </div>
                        </div>
                    </div>
                    <div className={s.section}>
                        <h3 className={s.sectionTitleContainer}>
                            <div className={s.sectionTitle}>
                                Администратор меры
                            </div>
                        </h3>
                        <div className={s.sectionContent}>
                            <div className={s.itemContainer}>
                                <span className={s.item}>Территориальный уровень меры поддержки: </span>
                                {subsidyData.TERRITORIAL_LEVEL}
                            </div>
                            <div className={s.itemContainer}>
                                <span className={s.item}>Регион: </span>
                                {subsidyData.REGION_ID}
                            </div>
                            <div className={s.itemContainer}>
                                <span className={s.item}>Администратор меры поддержки: </span>
                                {subsidyData.RESPONS_STRUCTURE}
                            </div>
                            <div className={s.itemContainer}>
                                <span className={s.item}>Организация, предоставляющая меру поддержки: </span>
                                {subsidyData.ORG_ID}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default compose(
    withRequestFetching
)(Subsidy)
