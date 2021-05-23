import React from 'react'
import s from './Compare.module.scss'

const Compare = ({subsidyCompare, ...props}) => {
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
                                        {subsidyCompare[0].FULL_NAME}
                                    </div>
                                </div>
                                <div className={s.second}>
                                    <div className={s.text}>
                                        {subsidyCompare[1].FULL_NAME}
                                    </div>
                                </div>
                            </div>
                            <div className={s.row}>
                                <div className={s.first}>
                                    <h5 className={s.rowTitle}>Описание меры поддержки</h5>
                                    <div className={s.text}>
                                        {subsidyCompare[0].DESCRIPTION}
                                    </div>
                                </div>
                                <div className={s.second}>
                                    <div className={s.text}>
                                        {subsidyCompare[1].DESCRIPTION}
                                    </div>
                                </div>
                            </div>
                            <div className={s.row}>
                                <div className={s.first}>
                                    <h5 className={s.rowTitle}>Цели предоставления поддержки</h5>
                                    <div className={s.text}>
                                        {subsidyCompare[0].PURPOSE}
                                    </div>
                                </div>
                                <div className={s.second}>
                                    <div className={s.text}>
                                        {subsidyCompare[1].PURPOSE}
                                    </div>
                                </div>
                            </div>
                            <div className={s.row}>
                                <div className={s.first}>
                                    <h5 className={s.rowTitle}>Задачи предоставления поддержки</h5>
                                    <div className={s.text}>
                                        {subsidyCompare[0].OBJECTIVE}
                                    </div>
                                </div>
                                <div className={s.second}>
                                    <div className={s.text}>
                                        {subsidyCompare[1].OBJECTIVE}
                                    </div>
                                </div>
                            </div>
                            <div className={s.row}>
                                <div className={s.first}>
                                    <h5 className={s.rowTitle}>Тип меры поддержки</h5>
                                    <div className={s.text}>
                                        {subsidyCompare[0].TYPE_MERA}
                                    </div>
                                </div>
                                <div className={s.second}>
                                    <div className={s.text}>
                                        {subsidyCompare[1].TYPE_MERA}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={s.section}>
                            <h2 className={s.title}>Дополнительная информация о субсидиях</h2>
                            <div className={s.row}>
                                <div className={s.first}>
                                    <h5 className={s.rowTitle}>Формат предоставления поддержки</h5>
                                    <div className={s.text}>
                                        {subsidyCompare[0].TYPE_FORMAT_SUPPORT}
                                    </div>
                                </div>
                                <div className={s.second}>
                                    <div className={s.text}>
                                        {subsidyCompare[1].TYPE_FORMAT_SUPPORT}
                                    </div>
                                </div>
                            </div>
                            <div className={s.row}>
                                <div className={s.first}>
                                    <h5 className={s.rowTitle}>Процентная ставка предоставления поддержки</h5>
                                    <div className={s.text}>
                                        {subsidyCompare[0].PROCENT_VOZVRATA}
                                    </div>
                                </div>
                                <div className={s.second}>
                                    <div className={s.text}>
                                        {subsidyCompare[1].PROCENT_VOZVRATA}
                                    </div>
                                </div>
                            </div>
                            <div className={s.row}>
                                <div className={s.first}>
                                    <h5 className={s.rowTitle}>Срок предоставления гарантии</h5>
                                    <div className={s.text}>
                                        {subsidyCompare[0].GUARANTE_PERIODE}
                                    </div>
                                </div>
                                <div className={s.second}>
                                    <div className={s.text}>
                                        {subsidyCompare[1].GUARANTE_PERIODE}
                                    </div>
                                </div>
                            </div>
                            <div className={s.row}>
                                <div className={s.first}>
                                    <h5 className={s.rowTitle}>Стоимость предоставления гарантии</h5>
                                    <div className={s.text}>
                                        {subsidyCompare[0].GUARANTEE_COST}
                                    </div>
                                </div>
                                <div className={s.second}>
                                    <div className={s.text}>
                                        {subsidyCompare[1].GUARANTEE_COST}
                                    </div>
                                </div>
                            </div>
                            <div className={s.row}>
                                <div className={s.first}>
                                    <h5 className={s.rowTitle}>Список поддерживаемых отраслей</h5>
                                    <div className={s.text}>
                                        {subsidyCompare[0].APPLIANCE_ID}
                                    </div>
                                </div>
                                <div className={s.second}>
                                    <div className={s.text}>
                                        {subsidyCompare[1].APPLIANCE_ID}
                                    </div>
                                </div>
                            </div>
                            <div className={s.row}>
                                <div className={s.first}>
                                    <h5 className={s.rowTitle}>ТСписок типов проблем, на решение которых направлена мера
                                        поддержки</h5>
                                    <div className={s.text}>
                                        {subsidyCompare[0].COMPLEXITY}
                                    </div>
                                </div>
                                <div className={s.second}>
                                    <div className={s.text}>
                                        {subsidyCompare[1].COMPLEXITY}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={s.section}>
                            <h2 className={s.title}>Условия получения субсидии</h2>
                            <div className={s.row}>
                                <div className={s.first}>
                                    <h5 className={s.rowTitle}>Требования к заявителю</h5>
                                    <div className={s.text}>
                                        {subsidyCompare[0].REQ_ZAYAVITEL}
                                    </div>
                                </div>
                                <div className={s.second}>
                                    <div className={s.text}>
                                        {subsidyCompare[1].REQ_ZAYAVITEL}
                                    </div>
                                </div>
                            </div>
                            <div className={s.row}>
                                <div className={s.first}>
                                    <h5 className={s.rowTitle}>Требования к проекту</h5>
                                    <div className={s.text}>
                                        {subsidyCompare[0].REQUEST_PROJECT}
                                    </div>
                                </div>
                                <div className={s.second}>
                                    <div className={s.text}>
                                        {subsidyCompare[1].REQUEST_PROJECT}
                                    </div>
                                </div>
                            </div>
                            <div className={s.row}>
                                <div className={s.first}>
                                    <h5 className={s.rowTitle}>Допустимый бюджет проекта</h5>
                                    <div className={s.text}>
                                        {subsidyCompare[0].BUDGET_PROJECT}
                                    </div>
                                </div>
                                <div className={s.second}>
                                    <div className={s.text}>
                                        {subsidyCompare[1].BUDGET_PROJECT}
                                    </div>
                                </div>
                            </div>
                            <div className={s.row}>
                                <div className={s.first}>
                                    <h5 className={s.rowTitle}>Список показателей результативности проекта</h5>
                                    <div className={s.text}>
                                        {subsidyCompare[0].POKAZATEL_RESULT}
                                    </div>
                                </div>
                                <div className={s.second}>
                                    <div className={s.text}>
                                        {subsidyCompare[1].POKAZATEL_RESULT}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={s.section}>
                            <h2 className={s.title}>Администратор меры</h2>
                            <div className={s.row}>
                                <div className={s.first}>
                                    <h5 className={s.rowTitle}>Территориальный уровень меры поддержки</h5>
                                    <div className={s.text}>
                                        {subsidyCompare[0].TERRITORIAL_LEVEL}
                                    </div>
                                </div>
                                <div className={s.second}>
                                    <div className={s.text}>
                                        {subsidyCompare[1].TERRITORIAL_LEVEL}
                                    </div>
                                </div>
                            </div>
                            <div className={s.row}>
                                <div className={s.first}>
                                    <h5 className={s.rowTitle}>Регион</h5>
                                    <div className={s.text}>
                                        {subsidyCompare[0].REGION_ID}
                                    </div>
                                </div>
                                <div className={s.second}>
                                    <div className={s.text}>
                                        {subsidyCompare[1].REGION_ID}
                                    </div>
                                </div>
                            </div>
                            <div className={s.row}>
                                <div className={s.first}>
                                    <h5 className={s.rowTitle}>Администратор меры поддержки</h5>
                                    <div className={s.text}>
                                        {subsidyCompare[0].RESPONS_STRUCTURE}
                                    </div>
                                </div>
                                <div className={s.second}>
                                    <div className={s.text}>
                                        {subsidyCompare[1].RESPONS_STRUCTURE}
                                    </div>
                                </div>
                            </div>
                            <div className={s.row}>
                                <div className={s.first}>
                                    <h5 className={s.rowTitle}>Организация, предоставляющая меру поддержки</h5>
                                    <div className={s.text}>
                                        {subsidyCompare[0].ORG_ID}
                                    </div>
                                </div>
                                <div className={s.second}>
                                    <div className={s.text}>
                                        {subsidyCompare[1].ORG_ID}
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
