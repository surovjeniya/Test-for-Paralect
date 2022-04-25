import './Search.scss'
import {useState} from 'react'
import {searchUser} from '../../redux/actions/searchUser'
import {searchRepositories} from '../../redux/actions/searchRepositories'
import {useDispatch} from 'react-redux'

export const Search  = () => {

    const dispatch = useDispatch()

    const [form,setForm] = useState({
        login:''
    })

    const onChangeHanlder = (e) => {
        setForm({...form,[e.target.name] : e.target.value})
    } 
    
    const onSearchHandler = () => {
        dispatch(searchUser(form.login))
        dispatch(searchRepositories(form.login))
        setForm({
            login:''
        })
    }

    return (
        <form 
            onSubmit = {e => e.preventDefault()}
            className="search__form">
            <button 
                onClick={onSearchHandler}
                className='search__btn'>
                <i className="fa-solid fa-magnifying-glass"></i>
            </button>
            <input 
                className='search__input'
                name = 'login'
                value = {form.login}
                onChange = {onChangeHanlder}
                type="text"
            />
        </form>
    )
}