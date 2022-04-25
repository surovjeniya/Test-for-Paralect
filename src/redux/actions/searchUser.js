import {GET_USER} from '../types'
import {getUser} from '../../api/methods'
import {loaded} from './loaded'
import {loading} from './loading'

export const searchUser = (payload) => {
    return async dispatch => {
        dispatch(loading())
        dispatch({
            type:GET_USER,
            user : await getUser(payload)
        })
        dispatch(loaded())
    }
}