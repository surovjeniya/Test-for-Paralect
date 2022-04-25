import './Navbar.scss'
import {Search} from '../Search/Search'

export const Navbar = () => {
    return (
        <nav className="nav-bar">
            <div className="container nav-bar__content">
                <a href="https://github.com" target='_blank' className='nav-bar__link'>
                    <i className="fa-brands fa-github"></i>
                </a>    
                <Search/>
            </div>
        </nav>
    )
}