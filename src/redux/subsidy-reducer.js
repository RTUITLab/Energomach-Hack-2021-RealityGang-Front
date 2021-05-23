import {subsidyApi} from '../api/api'
import {toggleIsFetching} from './auth-reducer'

const SET_SUBSIDY_LIST = 'SET_SUBSIDY_LIST'
const SET_SUBSIDY_DATA = 'SET_SUBSIDY_DATA'
const SET_SUBSIDY_DATA2 = 'SET_SUBSIDY_DATA2'
const SET_SUBSIDY_DATA3 = 'SET_SUBSIDY_DATA3'
const ADD_ITEM_TO_COMPARE = 'ADD_ITEM_TO_COMPARE'
const DELETE_ITEM_FROM_COMPARE = 'DELETE_ITEM_FROM_COMPARE'
const DELETE_ALL_ITEMS = 'DELETE_ALL_ITEMS'

let initialState = {
    subsidyList: [],
    subsidyData: [],
    subsidyData2: [],
    subsidyData3: [],
    subsidyCompare: [],
}

const subsidyReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SUBSIDY_LIST:
            return {
                ...state,
                subsidyList: action.subsidyList
            }
        case SET_SUBSIDY_DATA:
            return {
                ...state,
                subsidyData: action.subsidyData
            }
        case SET_SUBSIDY_DATA2:
            return {
                ...state,
                subsidyData2: action.subsidyData2
            }
        case SET_SUBSIDY_DATA3:
            return {
                ...state,
                subsidyData3: action.subsidyData3
            }
        case ADD_ITEM_TO_COMPARE:
            return {
                ...state,
                subsidyCompare: [...state.subsidyCompare, action.itemData]
            }
        case DELETE_ALL_ITEMS:
            return {
                ...state,
                subsidyCompare: []
            }
        case DELETE_ITEM_FROM_COMPARE:

            return {
                ...state,
                subsidyCompare: state.subsidyCompare.filter(com => {
                    return com.ID !== action.id
                    }
                )
            }
        default:
            return state
    }
}

export const setSubsidyList = (subsidyList) => ({type: SET_SUBSIDY_LIST, subsidyList})
export const setSubsidy = (subsidyData) => ({type: SET_SUBSIDY_DATA, subsidyData})
export const setSubsidy2 = (subsidyData2) => ({type: SET_SUBSIDY_DATA2, subsidyData2})
export const setSubsidy3 = (subsidyData3) => ({type: SET_SUBSIDY_DATA3, subsidyData3})
export const addItemToCompare = (itemData) => ({type: ADD_ITEM_TO_COMPARE, itemData})
export const deleteItemFromCompare = (id) => ({type: DELETE_ITEM_FROM_COMPARE, id})
export const deleteAllItems = () => ({type: DELETE_ALL_ITEMS})

export const getSubsidyList = (company) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true))
        try {
            let response = await subsidyApi.getSubsidyList(company)
            console.log('getSubsidyList', response)
            if(response.status === 200) {
                dispatch(deleteAllItems())
                dispatch(setSubsidyList(response.data))
            }
            dispatch(toggleIsFetching(false))
        } catch (error) {
            // console.log('getSubsidyList error', error.toJSON())
            // window.alert('getSubsidyList error')
            dispatch(toggleIsFetching(false))
        }
    }
}
export const getSubsidyData = (id, index = 1) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true))
        try {
            let response = await subsidyApi.getSubsidyData(id)
            console.log('getSubsidyData', response)
            if(response.status === 200) {
                if(index === 1) {
                    dispatch(setSubsidy(response.data))
                } else if(index === 2) {
                    dispatch(setSubsidy2(response.data))
                } else if(index === 3) {
                    dispatch(setSubsidy3(response.data))
                }
            }
            dispatch(toggleIsFetching(false))
        } catch (error) {
            // console.log('getSubsidyData error', error.toJSON())
            // window.alert('getSubsidyData error')
            dispatch(toggleIsFetching(false))
        }
    }
}


export default subsidyReducer
