import {useSelector} from 'react-redux'
import './UserInfo.scss'
import {Empty} from '../Empty/Empty'
import { Fragment } from 'react'

export const UserInfo = () => {

    const userInfo = useSelector(state => state.userReducer)
    const {user,notFound} = userInfo;

    const userCard = user && 
    <Fragment>
        <img src={user.avatar_url} alt="user avatar" className="user-info__avatar" />
            <h2 className="user-info__name">
                {user.name}
            </h2>
            <a href={user.html_url} className="user-info__login" target='_blank'>
                {user.login}
            </a>
            <div className="user-info__bottom">
                <span>
                    <i className="fa-solid fa-user-group"></i>
                    {user.followers}
                    followers
                </span>
                <span>
                    <i className="fa-solid fa-user-large"></i>
                    {user.following}
                    following
                </span>
            </div>
    </Fragment>

    return (
        <div className="user-info">
            {userCard}
        </div>
    )
}

