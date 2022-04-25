import {GET_REPOS} from '../types'
import {getRepos} from '../../api/methods'
import {loaded} from './loaded'
import {loading} from './loading'


export const searchRepositories = (payload) => {
    return async dispatch => {
        dispatch(loading())
        dispatch({
            type:GET_REPOS,
            repos : await getRepos(payload)
        })
        dispatch(loaded())
    }
}