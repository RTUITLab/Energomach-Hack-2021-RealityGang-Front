import React, {useEffect} from 'react'
import SubsidyList from './SubsidyList'
import {useDispatch, useSelector} from 'react-redux'

const SubsidyListContainer = (props) => {

    const dispatch = useDispatch()
    const subsidyList = useSelector(state => state.subsidy.subsidyList)

    // useEffect(() => {
    //
    // },[])

    return (
        <SubsidyList subsidyList={subsidyList} />
    )
}

export default SubsidyListContainer
