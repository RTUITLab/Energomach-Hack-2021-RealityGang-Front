import React, {useEffect} from 'react'
import Subsidy from './Subsidy'
import {useDispatch, useSelector} from 'react-redux'
import {getSubsidyData} from '../../../redux/subsidy-reducer'
import {useParams} from 'react-router-dom'
import {motion} from "framer-motion";

const SubsidyContainer = (props) => {

    const dispatch = useDispatch()
    const params = useParams()

    const subsidyData = useSelector((state) => state.subsidy.subsidyData)

    useEffect(() => {
        dispatch(getSubsidyData(params.id))
    }, [params])

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
            <Subsidy subsidyData={subsidyData} />
        </motion.div>
    )
}

export default SubsidyContainer
