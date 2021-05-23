import React, {useEffect} from 'react'
import Subsidy from './Subsidy'
import {useDispatch, useSelector} from 'react-redux'
import {getSubsidyData} from '../../../redux/subsidy-reducer'
import {useParams} from 'react-router-dom'

const SubsidyContainer = (props) => {

    const dispatch = useDispatch()
    const params = useParams()

    const subsidyData = useSelector((state) => state.subsidy.subsidyData)

    useEffect(() => {
        dispatch(getSubsidyData(params.id))
    }, [params])

    return (
        <Subsidy subsidyData={subsidyData} />
    )
}

export default SubsidyContainer
