import './RepositoresItem.scss'

export const RepositoresItem = ({repos}) => {

    return (
        <div className="repos">
            <a href={repos.html_url} className="repos__link" target='_blank'>{repos.name}</a>
            <p className="repos__description">
                {repos.description}
            </p>
        </div>
    )
}