import {filterApi} from "../api/api";
import {toast} from "react-toastify";

const SET_IS_FETCH = 'SET_IS_FETCH'
const SET_FILTERS = 'SET_FILTERS'


let initialState = {
    isFetch: false,
    filters: {}
}

const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_IS_FETCH:
            return {
                ...state,
                isFetch: action.isFetch
            }
        case SET_FILTERS:
            return {
                ...state,
                filters: action.filters
            }

        default:
            return state;
    }
}

export const toggleIsFetching = (isFetch) => ({type: SET_IS_FETCH, isFetch})
export const setFilters = (filters) => ({type: SET_FILTERS, filters})

export const fillInn = (inn) => { //Логин
    return async (dispatch) => {
        dispatch(toggleIsFetching(true))
        try {
            let response = await filterApi.fillInn(inn)
            console.log('inn', response)
            if(response.data.status === 404) {
                dispatch(toast.error('Ничего не найдено по ИНН'))
            }
            if(response.status === 200) {
                dispatch(setFilters(response.data))
            }
            dispatch(toggleIsFetching(false))
        }
        catch (error) {
            // console.log('fillInn error', error.toJSON())
            // window.alert('fillInn error')
            dispatch(toggleIsFetching(false))
        }
    }
}
export const fillOgrn = (ogrn) => { //Логин
    return async (dispatch) => {
        dispatch(toggleIsFetching(true))
        try {
            let response = await filterApi.fillOgrn(ogrn)
            console.log('ogrn', response)
            if(response.data.status === 404) {
                dispatch(toast.error('Ничего не найдено по ОГРН'))
            }
            if(response.data.status === 200) {
                dispatch(setFilters(response))
            }
            dispatch(toggleIsFetching(false))
        }
        catch (error) {
            // console.log('ogrn error', error.toJSON())
            // window.alert('ogrn error')
            dispatch(toggleIsFetching(false))
        }
    }
}


export default filterReducer
