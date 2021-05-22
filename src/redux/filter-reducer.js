import {filterApi} from "../api/api";
import {toast} from "react-toastify";
import {toggleIsFetching} from './auth-reducer'

const SET_FILTERS = 'SET_FILTERS'

let initialState = {
    isFetch: false,
    filters: {}
}

const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FILTERS:
            return {
                ...state,
                filters: action.filters
            }

        default:
            return state;
    }
}

export const setFilters = (filters) => ({type: SET_FILTERS, filters})

export const fillInn = (inn) => { //Информация по ИНН
    return async (dispatch) => {
        dispatch(toggleIsFetching(true))
        try {
            let response = await filterApi.fillInn(inn)
            console.log('inn', response)
            if(response.status === 404) {
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
export const fillOgrn = (ogrn) => { //Информация по ОГРН
    return async (dispatch) => {
        dispatch(toggleIsFetching(true))
        try {
            let response = await filterApi.fillOgrn(ogrn)
            console.log('ogrn', response)
            if(response.status === 404) {
                dispatch(toast.error('Ничего не найдено по ОГРН'))
            }
            if(response.status === 200) {
                dispatch(setFilters(response.data))
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
export const getFilters = () => { //Получить фильтры
    return async (dispatch) => {
        dispatch(toggleIsFetching(true))
        try {
            let response = await filterApi.getFilters()
            console.log('getFilters', response)
            if(response.status === 404) {
                dispatch(toast.error('Ничего не найдено по пользователю'))
            }
            if(response.status === 200) {
                dispatch(setFilters(response.data))
            }
            dispatch(toggleIsFetching(false))
        }
        catch (error) {
            // console.log('getFilters error', error.toJSON())
            // window.alert('getFilters error')
            dispatch(toggleIsFetching(false))
        }
    }
}
export const saveFilters = (company) => { //Сохранить фильтры
    return async (dispatch) => {
        dispatch(toggleIsFetching(true))
        debugger
        try {
            let response = await filterApi.saveFilters(company)
            console.log('saveFilters', response)
            debugger
            if(response.status === 404) {
                dispatch(toast.error('Ничего не найдено по пользователю'))
            }
            if(response === 200) {
                dispatch(toast.success('Фильтры успешно сохранены'))
            }
            dispatch(toggleIsFetching(false))
        }
        catch (error) {
            // console.log('getFilters error', error.toJSON())
            // window.alert('getFilters error')
            dispatch(toggleIsFetching(false))
        }
    }
}


export default filterReducer
