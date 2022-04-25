import {API_URI} from './config'


export const getUser = async (user) => {
    try {
        const res = await fetch(`${API_URI}/users/${user}`)
        if(res.status === 200) {
            return res.json()
        } 
    }
    catch(e) {
        return e
    }
}

export const getRepos = async (user) => {
    try {
        const res = await fetch(`${API_URI}/users/${user}/repos`)
        if(res.status === 200) {
            return res.json()
        } 
    }
    catch(e) {
        return e
    }
}