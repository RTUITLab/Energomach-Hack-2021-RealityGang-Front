import {subsidyApi} from "../api/api";
import {toggleIsFetching} from './auth-reducer'

const SET_SUBSIDY_LIST = 'SET_SUBSIDY_LIST'

let initialState = {
    subsidyList: [],

}

const subsidyReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SUBSIDY_LIST:
            return {
                ...state,
                isInitialize: action.isInitialize
            }
        default:
            return state;
    }
}

export const setSubsidyList = (list) => ({type: SET_SUBSIDY_LIST, list})


export const getSubsidyList = (company) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true))
        try {
            let response = await subsidyApi.getSubsidyList(company)
            console.log('getSubsidyList', response)
            debugger
            dispatch(setSubsidyList(response))
            localStorage.setItem('accessToken', response.data.access)
            dispatch(toggleIsFetching(false))
        }
        catch (error) {
            // console.log('getSubsidyList error', error.toJSON())
            // window.alert('getSubsidyList error')
            dispatch(toggleIsFetching(false))
        }
    }
}


export default subsidyReducer
