import React from 'react'
import s from './Form.module.scss'
import search_image from '../../../assets/images/search_form.svg'
import search from '../../../assets/images/search.svg'
import {Select} from 'antd'
import arrow from '../../../assets/images/icons-arrow-chevron-down-copy.svg'
import {withRequestFetching} from '../../../hoc/withRequestFetching'
import {compose} from 'redux'
import {okvedArray} from '../../../data/okved'
import {regionArray} from '../../../data/region'
import {otraslArray} from '../../../data/otrasl'
import {formaArray} from '../../../data/forma'
import {attrArray} from '../../../data/attr'
import {actingArray} from '../../../data/acting'

const { Option } = Select;
const Form = (props) => {

    const children = [];
    for (let i = 10; i < 36; i++) {
        children.push(<Option value={i.toString(36) + i} key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
    }
    return (
        <div className={s.form}>
            <div className={s.topContainer}>
                <div className={'container'}>
                    <div className={s.top}>
                        <div className={s.info}>
                            <h2 className={s.name}>Предоставление субсидий, займов, лизинга</h2>
                            <h1 className={s.title}>Навигатор мер поддержки</h1>
                            <div className={s.description}>
                                Цифровой помощник, позволяющий идентифицировать пользователя и на основе имеющейся в
                                системе информации предлагать наиболее актуальные меры поддержки, а так же проводить их
                                сравнительный анализ.
                            </div>
                        </div>
                        <div className={s.imgContainer}>
                            <img className={s.img} src={search_image} alt='search' />
                        </div>
                    </div>
                </div>
            </div>
            <div className={'container'}>
                <div className={s.searchInputContainer}>
                    <input placeholder='Введите ключевые слова' className={s.searchInput} id='searchInput' type='text' />
                    <label className={s.searchLabel} htmlFor='searchInput'>
                        <img src={search} alt='loup' />
                    </label>
                </div>
                <h3 className={s.content_title}>Заполните информацию о предприятии</h3>
                <div className={s.content}>
                    <div className={s.filterContainer}>
                        <div className={s.textInputs}>
                            <div className={s.textInputContainer}>
                                <input maxLength={15} id={'inn'} value={props.inn} onChange={(e) => props.setInn(e.target.value)} placeholder='Введите ИНН' type='text' className={s.textInput} />
                                <button onClick={props.handleFindInn} className={s.fill}>Заполнить по ИНН</button>
                            </div>
                            <div className={s.textInputContainer}>
                                <input maxLength={15} id={'ogrn'} value={props.ogrn} onChange={(e) => props.setOgrn(e.target.value)} placeholder='Введите ОГРН' type='text' className={s.textInput} />
                                <button onClick={props.handleFindOgrn} className={s.fill}>Заполнить по ОГРН</button>
                            </div>
                        </div>
                        <div className={s.listInputs}>

                            <div className={s.listInput}>
                                <Select
                                    mode="tags"
                                    size='default'
                                    value={props.okved}
                                    onChange={(e) => props.setOkved(e)}
                                    placeholder="ОКВЭД"
                                    style={{ width: '100%' }}
                                >
                                    {
                                        okvedArray.map((item) => {
                                            return (
                                                <Option value={item} key={item}>{item}</Option>
                                            )
                                        })
                                    }
                                </Select>
                                <img className={s.arrow} src={arrow} alt='arrow' />
                            </div>
                            <div className={s.listInput}>
                                <Select
                                    mode="tags"
                                    size='default'
                                    value={props.attrs}
                                    onChange={(e) => props.setAttrs(e)}
                                    placeholder="Атрибуты предприятия"
                                    // dropdownClassName={s.drop}
                                    style={{ width: '100%' }}
                                >
                                    {
                                        attrArray.map((item) => {
                                            return (
                                                <Option value={item} key={item}>{item}</Option>
                                            )
                                        })
                                    }
                                </Select>
                                <img className={s.arrow} src={arrow} alt='arrow' />
                            </div>
                            <div className={s.listInput}>
                                <Select placeholder="Основной ТАСС"
                                        showSearch
                                        value={props.osn_tass}
                                        onChange={(e) => props.setOsnTass(e)}
                                        optionFilterProp="children"
                                        filterOption={(input, option) =>
                                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                        }
                                        size={'default'}
                                        style={{ width: '100%' }}>
                                    {
                                        actingArray.map((item) => {
                                            return (
                                                <Option value={item} key={item}>{item}</Option>
                                            )
                                        })
                                    }
                                </Select>

                                <img className={s.arrow} src={arrow} alt='arrow' />
                            </div>
                            <div className={s.listInput}>
                                <Select
                                    mode="tags"
                                    size='default'
                                    value={props.dop_tass}
                                    onChange={(e) => props.setDopTass(e)}
                                    placeholder="Дополнительный ТАСС"
                                    // dropdownClassName={s.drop}
                                    style={{ width: '100%' }}
                                >
                                    {
                                        actingArray.map((item) => {
                                            return (
                                                <Option value={item} key={item}>{item}</Option>
                                            )
                                        })
                                    }
                                </Select>
                                <img className={s.arrow} src={arrow} alt='arrow' />
                            </div>
                            <div className={s.listInput}>
                                <Select placeholder="Регион"
                                        showSearch
                                        value={props.region}
                                        onChange={(e) => props.setRegion(e)}
                                        optionFilterProp="children"
                                        filterOption={(input, option) =>
                                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                        }
                                        size={'default'}
                                        style={{ width: '100%' }}>
                                    {
                                        regionArray.map((item) => {
                                            return (
                                                <Option value={item} key={item}>{item}</Option>
                                            )
                                        })
                                    }
                                </Select>
                                <img className={s.arrow} src={arrow} alt='arrow' />
                            </div>
                            <div className={s.listInput}>
                                <Select
                                    mode="tags"
                                    size='default'
                                    value={props.otr}
                                    onChange={(e) => props.setOtr(e)}
                                    placeholder="Отрасль"
                                    // dropdownClassName={s.drop}
                                    style={{ width: '100%' }}
                                >
                                    {
                                        otraslArray.map((item) => {
                                            return (
                                                <Option value={item} key={item}>{item}</Option>
                                            )
                                        })
                                    }
                                </Select>
                                <img className={s.arrow} src={arrow} alt='arrow' />
                            </div>
                            <div></div>
                            <div className={s.listInput}>
                                <Select placeholder="Форма организации"
                                        showSearch
                                        value={props.form}
                                        onChange={(e) => props.setForm(e)}
                                        optionFilterProp="children"
                                        filterOption={(input, option) =>
                                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                        }
                                        size={'default'}
                                        style={{ width: '100%' }}>
                                    {
                                        formaArray.map((item, index) => {
                                            return (
                                                <Option value={item} key={item}>{item}</Option>
                                            )
                                        })
                                    }
                                </Select>
                                <img className={s.arrow} src={arrow} alt='arrow' />
                            </div>

                        </div>
                    </div>

                    <div className={s.buttons}>
                        {
                            props.isAuth &&
                            <button onClick={props.handleSaveFilters} className={s.saveBtn}>
                                Сохранить данные о компании
                            </button>
                        }
                        <button onClick={props.handleSubmit} className={s.submitBtn}>
                            Подобрать меры поддержки
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default compose(
    withRequestFetching
)(Form)
