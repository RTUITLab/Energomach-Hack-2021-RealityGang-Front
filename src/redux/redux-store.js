import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from 'redux-thunk';
import authReducer from './auth-reducer'
import filterReducer from './filter-reducer'
import subsidyReducer from './subsidy-reducer'


let reducers = combineReducers({
    auth: authReducer,
    filter: filterReducer,
    subsidy: subsidyReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;

export default store;
