import {combineReducers} from 'redux'
import {userReducer} from './reducers/userReducer'
import {loadingReducer} from './reducers/loadingReducer'
import {reposReducer} from './reducers/reposReducer'

export const rootReducer = combineReducers({
    userReducer,loadingReducer,reposReducer
})