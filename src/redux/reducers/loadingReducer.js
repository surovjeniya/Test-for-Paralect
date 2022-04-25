import {LOADED,LOADING} from '../types'

const initialState = {
    loading:false
}

export const loadingReducer = (state=initialState,action) => {
    switch(action.type) {
        case LOADED :
            return {
                ...state,
                loading:false
            }
        case LOADING:
            return {
                ...state,
                loading:true
            }
        default:
            return state
    }
}