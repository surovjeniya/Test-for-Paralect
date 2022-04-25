import './RepositoresList.scss'
import {RepositoresItem} from '../RepositoresItem/RepositoresItem'
import {useSelector} from 'react-redux'
import { Empty } from '../Empty/Empty'
import {Fragment, useState} from 'react'
import {Pagination} from '../Pagination/Pagination'


export const RepositoresList = () => {

    const reposInfo = useSelector(state => state.reposReducer)
    const {repositories} = reposInfo
    const [currentPage,setCurrentPage] = useState(1)
    const [reposPerPage] = useState(10)

    const lastReposIndex = currentPage * reposPerPage
    const firstReposPage = lastReposIndex - reposPerPage
    const currentRepos = repositories.slice(firstReposPage,lastReposIndex)

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber)
    }
    
    return (
        <ul className="repositories-list">
            {
                repositories.length ?
                <Fragment>
                    <h2 className='repositories-list__title'>Repositories ({repositories.length})</h2>
                    {currentRepos.map(item => (
                    <li key={item.id}>
                        <RepositoresItem repos = {item}/>
                    </li>
                    ))}
                    <Pagination 
                        paginate = {paginate}
                        totalRepos = {repositories.length}
                        reposPerPage={reposPerPage}
                    />
                </Fragment>
                :
                <Empty message = 'Repository list is empty' icon={"fa-solid fa-battery-empty"}/>
            }
            
        </ul>
    )
}