import React from 'react'
import Compare from './Compare'
import {motion} from "framer-motion";

const CompareContainer = () => {

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
            <Compare />
        </motion.div>
    )
}

export default CompareContainer
