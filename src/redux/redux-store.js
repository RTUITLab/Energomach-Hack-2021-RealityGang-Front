import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from 'redux-thunk';
import authReducer from './auth-reducer'
import filterReducer from './filter-reducer'


let reducers = combineReducers({
    auth: authReducer,
    filter: filterReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;

export default store;
