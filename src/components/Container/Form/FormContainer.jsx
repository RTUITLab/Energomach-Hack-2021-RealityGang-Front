import React, {useEffect, useState} from 'react'
import {motion} from "framer-motion";
import Form from './Form'
import {fillInn, fillOgrn} from '../../../redux/filter-reducer'
import {useDispatch} from 'react-redux'

const FormContainer = (props) => {

    const dispatch = useDispatch()

    const [inn, setInn] = useState('')
    const [ogrn, setOgrn] = useState('')
    const [defaultValue, setDefault] = useState('')

    useEffect(() => {

    }, [])

    const handleFindInn = () => {
        dispatch(fillInn(inn))
    }
    const handleFindOgrn = () => {
        dispatch(fillOgrn(ogrn))
    }

    const animations = {
        hidden: {
            opacity: 0,
            x:0,
            y: 100,
        },
        visible: {
            opacity: 1,
            x:0,
            y:0,
        }
    }
    return (
        <motion.div variants={animations} initial="hidden" animate="visible"
                    transition={{ duration: 1 }}
        >
            <Form inn={inn} handleFindInn={handleFindInn} setInn={setInn} handleFindOgrn={handleFindOgrn}
                  defaultValue={defaultValue} setDefault={setDefault} ogrn={ogrn} setOgrn={setOgrn} />
        </motion.div>
    )
}

export default FormContainer
