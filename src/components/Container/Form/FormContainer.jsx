import React, {useEffect, useState} from 'react'
import {motion} from 'framer-motion'
import Form from './Form'
import {fillInn, fillOgrn, getFilters, saveFilters} from '../../../redux/filter-reducer'
import {useDispatch, useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'
import {getSubsidyList} from '../../../redux/subsidy-reducer'

const FormContainer = (props) => {

    const dispatch = useDispatch()
    const history = useHistory()

    const filters = useSelector((state) => state.filter.filters)
    const isAuth = useSelector((state) => state.auth.isAuth)

    const [inn, setInn] = useState('')
    const [ogrn, setOgrn] = useState('')

    const [okved, setOkved] = useState([])
    const [attrs, setAttrs] = useState([])
    const [osn_tass, setOsnTass] = useState('')
    const [dop_tass, setDopTass] = useState([])
    const [otr, setOtr] = useState([])
    const [region, setRegion] = useState('')
    const [form, setForm] = useState('')

    useEffect(() => {
        dispatch(getFilters())
    }, [])

    useEffect(() => {
        if(filters.ogrn) {
            setOgrn(filters.ogrn)
        }
        if(filters.inn) {
            setInn(filters.inn)
        }
        setDopTass(filters.dop_tass)
        setForm(filters.form)
        setOkved(filters.okved)
        setOsnTass(filters.osn_tass)
        setOtr(filters.otr)
        setRegion(filters.region)
        setAttrs(filters.attrs)
    }, [filters])

    const handleFindInn = () => {
        dispatch(fillInn(inn))
    }
    const handleFindOgrn = () => {
        dispatch(fillOgrn(ogrn))
    }
    const handleSaveFilters = () => {
        let object = {
            inn: inn,
            ogrn: ogrn,
            okved: okved,
            attrs: attrs,
            osn_tass: osn_tass,
            dop_tass: dop_tass,
            otr: otr,
            region: region,
            form: form,
        }
        dispatch(saveFilters(object))
    }

    const handleSubmit = () => {
        let object = {
            inn: inn,
            ogrn: ogrn,
            okved: okved,
            attrs: attrs,
            osn_tass: osn_tass,
            dop_tass: dop_tass,
            otr: otr,
            region: region,
            form: form,
        }
        dispatch(getSubsidyList(object))
        history.push('/subsidy_list')
    }

    const animations = {
        hidden: {
            opacity: 0,
            x: 0,
            y: 100,
        },
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
        }
    }
    return (
        <motion.div variants={animations} initial='hidden' animate='visible'
                    transition={{duration: 1}}
        >
            <Form inn={inn} handleFindInn={handleFindInn} dop_tass={dop_tass} setInn={setInn}
                  handleFindOgrn={handleFindOgrn}
                  ogrn={ogrn} setOgrn={setOgrn} form={form} okved={okved} region={region} osn_tass={osn_tass} otr={otr}
                  attrs={attrs} setOkved={setOkved} setAttrs={setAttrs} setOsnTass={setOsnTass} setDopTass={setDopTass} setRegion={setRegion}
                  setForm={setForm} setOtr={setOtr} handleSaveFilters={handleSaveFilters} isAuth={isAuth} handleSubmit={handleSubmit}
            />
        </motion.div>
    )
}

export default FormContainer
