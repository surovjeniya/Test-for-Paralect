import {GET_USER} from '../types'

const initialState = {
    user:null,
    notFound:false
}

export const userReducer = (state = initialState,action) => {
    switch(action.type) {

        case GET_USER:
            if(action.user) {
                return {
                    ...state,
                    user:action.user,
                    notFound:false
                }
            }else {
                return {
                    ...state,
                    user:null,
                    notFound:true
                }
            }
        default:
            return state
    }
}