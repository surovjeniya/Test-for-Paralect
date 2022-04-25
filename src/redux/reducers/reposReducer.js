import {GET_REPOS} from '../types'

const initialState = {
    repositories:[],
    notFound:false,
}


export const reposReducer = (state = initialState,action) => {
    switch(action.type) {
        case GET_REPOS:
            if(action.repos) {
                return {
                    ...state,
                    repositories:action.repos,
                    notFound:false
                }
            } else {
                return {
                    ...state,
                    repositories:[],
                    notFound:true
                }
            }
            
        default:
            return state
    }
}