import React from 'react'
import Compare from './Compare'
import {motion} from "framer-motion";
import {useSelector} from 'react-redux'

const CompareContainer = () => {

    const subsidyCompare = useSelector(state => state.subsidy.subsidyCompare)

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
            <Compare subsidyCompare={subsidyCompare} />
        </motion.div>
    )
}

export default CompareContainer
