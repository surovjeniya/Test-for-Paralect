import './Empty.scss'


export const Empty = ({message,icon}) => {
    return (
        <div className="empty">
            <p className="empty__icon">
                <i className={icon}></i>
            </p>
            <p className='empty__message'>
                {message}
            </p>
        </div>
    )
}